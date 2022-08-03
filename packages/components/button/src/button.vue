<template>
  <button :nativeType="nativeType" :class="[ns.b(), sizeClass, typeClass]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSize, useType } from '../hooks/useButton'
import { useNamespace } from '../../../hooks/useNamespace'
import type { SizeProps, TypeProps } from '../../types'

const ns = useNamespace('button')

const props = withDefaults(
  defineProps<{
    size?: SizeProps
    type?: TypeProps
    plain?: boolean
    circle?: boolean
    disabled?: boolean
    nativeType?: 'button' | 'submit' | 'reset'
  }>(),
  {
    size: '',
    type: '',
    plain: false,
    circle: false,
    disabled: false,
    nativeType: 'button',
  }
)
const sizeClass = useSize(
  ns,
  computed(() => props.size)
)
const typeClass = useType(
  ns,
  computed(() => props.type)
)
</script>

<style lang="scss" scoped></style>
