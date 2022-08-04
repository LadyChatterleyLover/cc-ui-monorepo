<template>
  <transition name="cc-message">
    <div
      v-show="visible"
      :style="{ top: top + 'px' }"
      :class="[ns.b(), computedTypeClass, center ? ns.m('center') : '']"
    >
      <div :class="[ns.e('icon')]">
        <cc-icon v-if="type === 'success'" color="var(--cc-color-success)">
          <CheckCircleOutlined />
        </cc-icon>
        <cc-icon v-if="type === 'warning'" color="var(--cc-color-warning)">
          <Warning />
        </cc-icon>
        <cc-icon v-if="type === 'info'" color="var(--cc-color-info)">
          <InfoCircleOutlined />
        </cc-icon>
        <cc-icon v-if="type === 'danger'" color="var(--cc-color-danger)">
          <CloseCircleOutlined />
        </cc-icon>
      </div>
      <div>{{ message }}</div>
      <div
        v-if="showClose"
        :class="[ns.e('close-btn')]"
        @click.stop="handleClose"
      >
        <cc-icon
          color="var(--cc-message-close-icon-color)"
          size="var(--cc-message-close-icon-size)"
        >
          <CloseOutlined />
        </cc-icon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@cc-ui/hooks/useNamespace'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from '@vicons/antd'
import { Warning } from '@vicons/carbon'
import { Icon as CcIcon } from '@cc-ui/components'
import type { MessageType } from '../types'

const ns = useNamespace('message')

const props = withDefaults(
  defineProps<{
    message?: string
    type?: MessageType
    center?: boolean
    showClose?: boolean
    offset?: number | string
  }>(),
  {
    message: '',
    type: 'info',
    center: false,
    showClose: false,
    offset: 20,
  }
)
const visible = ref<boolean>(false)
const closeFlag = ref<boolean>(false)
const top = ref<number | string>(props.offset)
const setVisible = (v: boolean, duration = 300) => {
  return new Promise((resolve) => {
    visible.value = v
    setTimeout(() => {
      resolve('')
    }, duration)
  })
}
const setTop = (t: number) => {
  top.value = t
}

const setCloseFlag = (close: boolean) => {
  closeFlag.value = close
}

const handleClose = () => {
  setCloseFlag(true)
  setVisible(false, 0)
}
defineExpose({
  setVisible,
  setTop,
  setCloseFlag,
  closeFlag,
})
const computedTypeClass = computed(() => {
  if (props.type === 'success') {
    return 'bg-success'
  } else if (props.type === 'info') {
    return 'bg-info'
  } else if (props.type === 'danger') {
    return 'bg-danger'
  } else if (props.type === 'warning') {
    return 'bg-warning'
  } else {
    return ''
  }
})
</script>
