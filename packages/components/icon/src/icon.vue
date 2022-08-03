<template>
  <Icon :size="size" :color="color" :tag="tag">
    <slot />
  </Icon>
</template>

<script lang="ts" setup>
import { Icon } from '@vicons/utils'
withDefaults(
  defineProps<{
    color?: string
    size?: string | number
    tag?: string
  }>(),
  {
    size: 16,
    color: '#000',
    tag: 'span',
  }
)
</script>

<style scoped lang="scss"></style>
