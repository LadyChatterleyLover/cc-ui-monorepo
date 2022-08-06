<template>
  <button
    :nativeType="nativeType"
    :class="[
      ns.b(),
      sizeClass,
      typeClass,
      isPlainClass,
      isRoundClass,
      isDisabledClass,
      isCircleClass,
    ]"
    @click.prevent.stop="handleClick"
  >
    <cc-icon v-if="icon">
      <component :is="icon" :color="type ? '#fff' : '#000'" />
    </cc-icon>
    <span v-if="$slots.default" :style="{ marginLeft: icon ? '8px' : '0' }"
      ><slot
    /></span>
  </button>
</template>

<script lang="ts" setup>
import { type Component, computed } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import { useSize, useType } from '../hooks/useButton'
import type { SizeProps, TypeProps } from '../../types'

const ns = useNamespace('button')

const props = withDefaults(
  defineProps<{
    size?: SizeProps
    type?: TypeProps
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    nativeType?: 'button' | 'submit' | 'reset'
    icon?: Component
  }>(),
  {
    size: '',
    type: '',
    plain: false,
    round: false,
    circle: false,
    disabled: false,
    nativeType: 'button',
  }
)

const emits = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    return
  }
  emits('click', e)
}

const sizeClass = useSize(
  ns,
  computed(() => props.size)
)
const typeClass = useType(
  ns,
  computed(() => props.type)
)
const isPlainClass = computed(() => (props.plain ? 'is-plain' : ''))
const isRoundClass = computed(() => (props.round ? 'is-round' : ''))
const isDisabledClass = computed(() => (props.disabled ? 'is-disabled' : ''))
const isCircleClass = computed(() => (props.circle ? 'is-circle' : ''))
</script>

<style lang="scss" scoped></style>
