<template>
  <div :class="[ns.b()]">
    <div :class="[ns.e('label')]">
      <div
        v-if="!type"
        :class="[ns.e('active-bar')]"
        :style="{
          width: activeBarWidth,
          transform: `translateX(${activeBarTranslate})`,
        }"
      />
      <div
        v-for="(item, index) in tabPaneList"
        :id="`tab-${item.name}-${uid}`"
        :key="item.name"
        :class="[ns.e('label-item'), ns.m(`${type}`)]"
        :style="{
          color:
            item.name === currentName ? 'var(--cc-color-primary)' : 'inherit',
          paddingLeft: index === 0 && !type ? 0 : '12px',
        }"
        @click="handleClick(item, $event)"
      >
        <component :is="item.slot" v-if="item.slot" />
        <span v-else>{{ item.label }}</span>
        <div
          v-if="closable"
          :class="[ns.e('close-btn')]"
          @click.stop="removeTabPane(item.name, index)"
        >
          <cc-icon>
            <CloseOutlined />
          </cc-icon>
        </div>
      </div>
    </div>
    <div :class="[ns.e('content')]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  nextTick,
  provide,
  ref,
  watch,
} from 'vue'
import { useNamespace } from '@cc-ui/hooks/useNamespace'
import { CloseOutlined } from '@vicons/antd'
import { TabsInjectionKey } from './constants'
import type { TabPaneContext } from '../types'

const ns = useNamespace('tabs')
const uid = getCurrentInstance()?.uid

const props = withDefaults(
  defineProps<{
    modelValue: string | number
    type?: '' | 'card' | 'border-card'
    closable?: boolean
    addable?: boolean
    editable?: boolean
  }>(),
  {
    type: '',
    closable: false,
    addable: false,
    editable: false,
  }
)

const emits = defineEmits([
  'update:modelValue',
  'tab-click',
  'tab-remove',
  'tab-change',
])

const tabPaneList = ref<TabPaneContext[]>([])
const currentName = ref<string | number>(props.modelValue)
const activeBarWidth = ref<string>('')
const activeBarTranslate = ref<string>('')

const addTabPaneContext = (context: TabPaneContext) => {
  tabPaneList.value.push(context)
}

const removeTabPane = (name: string | number, index: number) => {
  if (tabPaneList.value.length === 1) {
    currentName.value = ''
    tabPaneList.value = []
  } else {
    if (index === tabPaneList.value.length - 1 && index >= 0) {
      currentName.value = tabPaneList.value[index - 1].name
    }
    tabPaneList.value = tabPaneList.value.filter((item) => item.name !== name)
    emits('tab-remove', name)
  }
}

const handleClick = (item: TabPaneContext, e: Event) => {
  currentName.value = item.name
  setActiveBarStyle(currentName.value, true)
  emits('tab-click', item, e)
}

const setActiveBarStyle = (currentName: string | number, flag = false) => {
  if (currentName) {
    const dom = document.querySelector(`#tab-${currentName}-${uid}`)
    const style: CSSStyleDeclaration = window.getComputedStyle(
      dom as Element,
      null
    )
    const paddingLeft = Number(style.paddingLeft.replace('px', ''))
    const paddingRight = Number(style.paddingRight.replace('px', ''))
    const width = Number(style.width.replace('px', ''))
    activeBarWidth.value = `${width - paddingLeft - paddingRight}px`
    if (flag) {
      activeBarTranslate.value = `${
        (dom as HTMLDivElement).offsetLeft + paddingLeft
      }px`
    }
  }
}

watch(
  () => props.modelValue,
  (val) => {
    currentName.value = val
    emits('tab-change', val)
  }
)
watch(
  () => currentName.value,
  (val) => {
    nextTick(() => {
      setActiveBarStyle(val)
    })
  },
  { immediate: true }
)

provide(TabsInjectionKey, {
  addTabPaneContext,
  currentName: computed(() => currentName.value),
})
</script>

<style scoped></style>
