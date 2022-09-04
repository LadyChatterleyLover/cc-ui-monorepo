<template>
  <div
    :class="[ns.b()]"
    :style="{
      display: inline ? 'inline-flex' : 'flex',
      marginRight: inline ? '32px' : '0',
    }"
  >
    <div
      v-if="label"
      :style="{ width: computedLabelWidth, justifyContent: labelAlignValue }"
      :class="[ns.e('label')]"
    >
      <div :class="{ 'cc-form-item-label-required': required || isRequired }">
        {{ label }}
      </div>
    </div>
    <div
      :class="[ns.e('content')]"
      :style="{
        marginLeft: !label ? computedLabelWidth : 0,
        justifyContent: contentAlignValue,
      }"
    >
      <slot />
      <div :class="[ns.e('error')]">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  type ComputedRef,
  computed,
  inject,
  onMounted,
  provide,
  ref,
  watch,
} from 'vue'
import Schema from 'async-validator'
import { useNamespace } from '@cc-ui-plus/hooks/useNamespace'
import type { RuleItem, Rules } from '../types'

const ns = useNamespace('form-item')

const props = withDefaults(
  defineProps<{
    label?: string
    prop?: string
    labelWidth?: number | string
    required?: boolean
    labelAlign?: 'left' | 'center' | 'right'
    contentAlign?: 'left' | 'center' | 'right'
  }>(),
  {
    label: '',
    prop: '',
    labelWidth: '',
    required: false,
    labelAlign: 'left',
    contentAlign: 'left',
  }
)
const errorMessage = ref<string>('')
const validateChangeFlag = ref<number>(0)
const validateBlurFlag = ref<number>(0)
const rules = ref<Rules | Rules[]>()
const initValue = ref<any>()
const parentLabelWidth = inject<ComputedRef<number | string>>('labelWidth')
const inline = inject<ComputedRef<boolean>>('inline')
const computedLabelWidth = computed(() =>
  parentLabelWidth?.value
    ? `${parentLabelWidth?.value}px`
    : `${props.labelWidth}px`
)
const setValidateBlurFlag = (n: number) => {
  validateBlurFlag.value = n
}
const setValidateChangeFlag = (n: number) => {
  validateChangeFlag.value = n
}
const model = inject<ComputedRef<Record<string, any>>>('model')
const parentRules = inject<ComputedRef<Rules | Rules[]>>('rules')

provide('setValidateBlurFlag', setValidateBlurFlag)
provide('setValidateChangeFlag', setValidateChangeFlag)
const addFiled = inject<any>('addFiled')
const isRequired = computed(() => {
  if (rules.value && rules.value.length) {
    return (rules.value as Rules[]).find((rule: RuleItem) => rule.required)
  } else {
    return false
  }
})
// label对齐方式
const labelAlignValue = computed(() => {
  if (props.labelAlign === 'left') return 'flex-start'
  else if (props.labelAlign === 'center') return 'center'
  else return 'flex-end'
})
// 内容对齐方式
const contentAlignValue = computed(() => {
  if (props.contentAlign === 'left') return 'flex-start'
  else if (props.contentAlign === 'center') return 'center'
  else return 'flex-end'
})
// 验证方法
const validate = () => {
  // 当前表单值
  const value = model!.value[props.prop]
  // 当前表单验证规则
  const rules = (parentRules!.value as any)[props.prop]
  // 表单验证对象
  const validateAttr = {
    [props.prop]: rules,
  }
  const schema = new Schema(validateAttr)
  if (props.prop) {
    return new Promise((resolve) => {
      schema.validate(
        { [props.prop]: value },
        { firstFields: true },
        (errors: any) => {
          if (errors && errors.length) {
            errorMessage.value = errors[0].message!
            resolve(false)
          } else {
            errorMessage.value = ''
            resolve(true)
          }
        }
      )
    })
  }
}
// 重置表单值
const resetField = () => {
  ;(model?.value as any)[props.prop] = initValue.value
  errorMessage.value = ''
}
// 清除某个字段的验证
const clearValidate = () => {
  errorMessage.value = ''
}
// 初始化验证规则
const initRules = () => {
  rules.value = (parentRules?.value as any)[props.prop]
  if (rules.value && rules.value.length) {
    // 判断trigger的类型
    ;(rules.value as Rules[]).forEach((item: RuleItem) => {
      if (Array.isArray(item.trigger)) {
        if (item.trigger.includes('change') && validateChangeFlag.value > 0) {
          validate()
        }
        if (item.trigger.includes('blur') && validateBlurFlag.value > 0) {
          validate()
        }
      } else {
        if (item.trigger === 'blur' && validateBlurFlag.value > 0) {
          validate()
        }
        if (item.trigger === 'change' && validateChangeFlag.value > 0) {
          validate()
        }
      }
    })
  }
}
watch(
  () => validateBlurFlag.value,
  () => {
    initRules()
  }
)
watch(
  () => validateChangeFlag.value,
  () => {
    initRules()
  }
)
onMounted(() => {
  initRules()
  if (props.prop) {
    addFiled({
      validate,
      resetField,
      clearValidate,
      name: props.prop,
    })
  }
  if (props.prop) {
    initValue.value = model?.value[props.prop]
  }
})
</script>

<style lang="scss" scoped></style>
