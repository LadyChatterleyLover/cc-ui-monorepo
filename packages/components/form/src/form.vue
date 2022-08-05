<template>
  <div class="w-full" :class="[`${inline ? 'inline-flex' : ''}`]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import type { Callback, RuleItem } from '../types'
export interface Rules {
  [key: string]: RuleItem[]
}
const props = withDefaults(
  defineProps<{
    model: Record<string, any>
    rules?: Rules
    labelWidth?: number | string
    inline?: boolean
  }>(),
  {
    labelWidth: '',
    inline: false,
  }
)
const filedList = ref<any[]>([])
const addFiled = (filed: any) => {
  filedList.value.push(filed)
}
// 验证方法
const validate = (callback: Callback) => {
  // 所有需要验证表单项的结果
  if (filedList.value && filedList.value.length) {
    const tasks = filedList.value.map((item: any) => item.validate())
    Promise.all(tasks)
      .then((res) => {
        const result = res.every((item) => item === true)
        callback(result)
      })
      .catch(() => callback(false))
  }
}
// 验证某个字段
const validateField = (prop: string, callback: Callback) => {
  if (filedList.value && filedList.value.length) {
    const tasks = filedList.value
      .find((item: any) => item.name === prop)
      ?.validate()
    Promise.all([tasks])
      .then((res) => {
        const result = res.every((item) => item === true)
        callback(result)
      })
      .catch(() => callback(false))
  }
}
// 重置表单值
const resetFields = () => {
  if (filedList.value && filedList.value.length) {
    filedList.value.forEach((item: any) => {
      item.resetField()
    })
  }
}
// 清除某个字段的验证
const clearValidate = (prop: string) => {
  if (filedList.value && filedList.value.length) {
    const item = filedList.value.find((item: any) => item.name === prop)
    item.clearValidate()
  }
}
defineExpose({
  validate,
  resetFields,
  validateField,
  clearValidate,
})
provide(
  'labelWidth',
  computed(() => props.labelWidth)
)
provide(
  'model',
  computed(() => props.model)
)
provide(
  'rules',
  computed(() => props.rules)
)
provide(
  'inline',
  computed(() => props.inline)
)
provide('addFiled', addFiled)
</script>

<style lang="scss" scoped></style>
