<template>
  <ClientOnly>
    <div class="demo-block">
      <div class="demo-block-content">
        <slot />
      </div>
      <div class="demo-block-divider" />
      <div class="demo-block-action">
        <div class="demo-block-action-item" @click="handleCopy">
          <cc-icon size="16" color="#909399">
            <CopyOutlined />
          </cc-icon>
        </div>
        <div class="demo-block-action-item" @click="handleExpand">
          <img
            v-if="!expand"
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"
            class="code-expand-icon-show"
            width="16"
            height="16"
          />
          <img
            v-else
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"
            class="code-expand-icon-hide"
            width="16"
            height="16"
          />
        </div>
      </div>
      <div
        class="demo-block-source"
        :style="{ height: expand ? height + 'px' : 0 }"
      >
        <div ref="source">
          <slot name="source" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { nextTick, ref, useSlots } from 'vue'
import { CopyOutlined } from '@vicons/antd'
import { useCopy } from 'cc-ui-plus/hooks'
import TurndownService from 'turndown'
import { Message } from 'cc-ui-plus'

const expand = ref(false)
const source = ref<HTMLDivElement>()
const height = ref<number>(0)
const code = ref('')

const slots = useSlots().source?.()[0]
nextTick(() => {
  const html = slots?.el?.innerHTML
  const service = new TurndownService()
  code.value = service.turndown(html)
})

const handleExpand = () => {
  expand.value = !expand.value
  nextTick(() => {
    height.value = source.value?.offsetHeight as number
  })
}

const handleCopy = () => {
  if (code.value) {
    const { copy } = useCopy(code.value, () => {
      Message.success('复制成功')
    })
    copy()
  }
}
</script>

<style lang="scss" scoped>
.demo-block {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin: 15px 0;
  &-content {
    padding: 15px;
  }
  &-divider {
    width: 100%;
    height: 1px;
    background: #eee;
  }
  &-action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;
    &-item {
      margin-right: 12px;
      cursor: pointer;
      height: 16px;
      width: 16px;
      &:first-child {
        position: relative;
        top: -2px;
      }
      img {
        opacity: 0.55;
      }
    }
  }
  &-source {
    height: 0;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
}
</style>
