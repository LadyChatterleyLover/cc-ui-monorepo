<template>
  <div :class="[ns.b(), { 'is-disabled': disabled }]">
    <div
      :class="[ns.e('wrapper'), `${disabled ? ns.e('wrapper-disabled') : ''}`]"
      :style="{ padding: type === 'textarea' ? '0' : '0px 12px' }"
    >
      <span
        v-if="$slots.prefix || prefixIcon"
        style="color: #a8abb2"
        :class="[ns.e('wrapper-content')]"
      >
        <span>
          <cc-icon v-if="prefixIcon">
            <component :is="prefixIcon" />
          </cc-icon>
          <slot v-else name="prefix" />
        </span>
      </span>
      <textarea
        v-if="type === 'textarea'"
        v-model="inputValue"
        :class="[ns.e('textarea')]"
        :style="{ height: 40 * Number(rows) + 'px' }"
        :maxlength="maxlength"
        style="width: 100%"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
      />
      <input
        v-if="type === 'text'"
        ref="inputRef"
        v-model="inputValue"
        :type="`${isPassword ? 'password' : type}`"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :maxlength="Number(maxlength)"
        :class="[ns.e('input'), `${disabled ? ns.e('input-disabled') : ''}`]"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
      />
      <span
        v-if="$slots.suffix || suffixIcon"
        style="color: #a8abb2"
        :class="[ns.e('input-wrapper')]"
      >
        <span>
          <cc-icon v-if="suffixIcon">
            <component :is="suffixIcon" />
          </cc-icon>
          <slot v-else name="suffix" />
        </span>
      </span>
      <span
        v-if="clearable && modelValue.length"
        style="color: #a8abb2"
        :class="[ns.e('clear')]"
        @click="clear"
      >
        <span>
          <cc-icon>
            <CloseCircleOutlined />
          </cc-icon>
        </span>
      </span>
      <span
        v-if="showPassword && inputValue.length"
        style="color: #a8abb2"
        :class="[ns.e('password')]"
        @click="handlePasswordVisible"
      >
        <span>
          <cc-icon>
            <EyeOutlined v-if="isPassword" />
            <EyeInvisibleOutlined v-else />
          </cc-icon>
        </span>
      </span>
      <div v-if="maxlength && showWordLimit" :class="[ns.e('limit')]">
        {{ inputValue.length }} / {{ maxlength }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Component, inject, nextTick, ref, watch } from 'vue'
import {
  CloseCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@vicons/antd'
import { useNamespace } from '@cc-ui/hooks/useNamespace'

const ns = useNamespace('input')

const props = withDefaults(
  defineProps<{
    modelValue: string
    type?: 'text' | 'textarea' | string
    placeholder?: string
    maxlength?: string | number
    minlength?: string | number
    clearable?: boolean
    disabled?: boolean
    readonly?: boolean
    showPassword?: boolean
    showWordLimit?: boolean
    prefixIcon?: Component
    suffixIcon?: Component
    rows?: number | string
  }>(),
  {
    type: 'text',
    placeholder: '',
    clearable: false,
    disabled: false,
    readonly: false,
    showPassword: false,
    showWordLimit: false,
    rows: 1,
  }
)
const emits = defineEmits([
  'update:modelValue',
  'input',
  'blur',
  'focus',
  'clear',
  'change',
])
const setValidateChangeFlag = inject<((n: number) => void) | undefined>(
  'setValidateChangeFlag',
  undefined
)
const setValidateBlurFlag = inject<((n: number) => void) | undefined>(
  'setValidateBlurFlag',
  undefined
)
const inputFlag = ref(0)
const blurFlag = ref(0)
const inputRef = ref<HTMLInputElement>()
const isPassword = ref<boolean>(props.showPassword)
const inputValue = ref<string>(props.modelValue)

const foucs = async () => {
  await nextTick()
  inputRef.value?.focus()
}

const blur = () => inputRef.value?.blur()

const handleInput = (e: Event) => {
  if (props.disabled) {
    return
  }
  emits('update:modelValue', (e as any).target.value)
  emits('input', (e as any).target.value)
  inputFlag.value++
  setValidateChangeFlag?.(inputFlag.value)
}
const handleBlur = (e: Event) => {
  if (props.disabled) {
    return
  }
  emits('blur', e)
  blurFlag.value++
  setValidateBlurFlag?.(blurFlag.value)
}
const handleFocus = (e: Event) => {
  if (props.disabled) {
    return
  }
  setValidateChangeFlag?.(0)
  setValidateBlurFlag?.(0)
  emits('focus', e)
}
const handleChange = (e: Event) => {
  emits('change', (e.target as HTMLInputElement).value)
}
const clear = (e: Event) => {
  emits('update:modelValue', '')
  emits('clear', e)
  foucs()
}

const handlePasswordVisible = () => {
  isPassword.value = !isPassword.value
  foucs()
}

watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = val
  }
)

defineExpose({
  foucs,
  blur,
})
</script>
