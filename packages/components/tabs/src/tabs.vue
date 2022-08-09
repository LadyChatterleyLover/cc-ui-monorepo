<template>
  <div :class="[ns.b()]">
    <div
      ref="wrap"
      :class="[ns.e('wrap')]"
      :style="{ padding: isOverflow ? '0 20px' : '0' }"
    >
      <div v-if="isOverflow" :class="[ns.e('icon-left')]" @click="handlePrev">
        <cc-icon>
          <LeftOutlined />
        </cc-icon>
      </div>
      <div style="overflow: hidden">
        <div
          ref="label"
          :class="[ns.e('label')]"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
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
            :class="[
              ns.e('label-item'),
              ns.m(`${type}`),
              ,
              { 'is-disabled': item.disabled },
            ]"
            :style="{
              color:
                item.name === currentName
                  ? 'var(--cc-color-primary)'
                  : 'inherit',
              paddingLeft: index === 0 && !type ? 0 : '12px',
            }"
            @click="handleClick(item, $event)"
          >
            <component :is="item.slot" v-if="item.slot" />
            <span v-else>{{ item.label }}</span>
            <div
              v-if="closable || item.closable"
              :class="[ns.e('close-btn')]"
              @click.stop="removeTabPane(item.name, index)"
            >
              <cc-icon>
                <CloseOutlined />
              </cc-icon>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isOverflow"
        :class="[ns.e('icon-right')]"
        @click.stop="handleNext"
      >
        <cc-icon>
          <RightOutlined />
        </cc-icon>
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
import { useNamespace } from '@cc-ui-plus/hooks/useNamespace'
import { CloseOutlined, LeftOutlined, RightOutlined } from '@vicons/antd'
import CcIcon from '../../icon'
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
const wrap = ref<HTMLDivElement>()
const label = ref<HTMLDivElement>()
const isOverflow = ref<boolean>(false)
const translateX = ref<number>(0)

const addTabPaneContext = (context: TabPaneContext) => {
  if (context.disabled) {
    return
  }
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
  if (item.disabled) {
    return
  }
  currentName.value = item.name
  setActiveBarStyle(currentName.value, true)
  emits('tab-click', item, e)
}

const setActiveBarStyle = (currentName: string | number, flag = false) => {
  if (currentName) {
    nextTick(() => {
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
    })
  }
}

const handlePrev = () => {
  translateX.value = 0
}

const handleNext = () => {
  nextTick(() => {
    const wrapWidth = Number(
      window
        .getComputedStyle(wrap.value as Element, null)
        .width.replace('px', '')
    )
    let width = 0
    for (let i = 0; i < tabPaneList.value.length; i++) {
      width += Number(
        window
          .getComputedStyle(
            document.querySelector(
              `#tab-${tabPaneList.value[i].name}-${uid}`
            ) as Element
          )
          .width.replace('px', '')
      )
    }
    translateX.value = -(width - wrapWidth + 20 * 2)
  })
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

watch(
  () => tabPaneList.value,
  (val) => {
    let width = 0
    nextTick(() => {
      const wrapWidth = Number(
        window
          .getComputedStyle(wrap.value as Element, null)
          .width.replace('px', '')
      )
      val.forEach((item) => {
        width += Number(
          window
            .getComputedStyle(
              document.querySelector(`#tab-${item.name}-${uid}`) as Element
            )
            .width.replace('px', '')
        )
      })
      isOverflow.value = width > wrapWidth
    })
  },
  { deep: true }
)

provide(TabsInjectionKey, {
  addTabPaneContext,
  currentName: computed(() => currentName.value),
})
</script>

<style scoped></style>
