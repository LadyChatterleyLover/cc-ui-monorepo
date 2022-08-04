<template>
  <div v-show="currentName === name">
    <slot />
    <div style="display: none">
      <slot v-if="$slots.label" name="label" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { TabsInjectionKey } from './constants'

const addTabPaneContext = inject(TabsInjectionKey)?.addTabPaneContext!
const currentName = inject(TabsInjectionKey)?.currentName!

const props = withDefaults(
  defineProps<{
    label?: string
    name: string | number
    disabled?: boolean
    closable?: boolean
  }>(),
  {
    label: '',
    disabled: false,
    closable: false,
  }
)

addTabPaneContext({
  label: computed(() => props.label).value,
  name: computed(() => props.name).value,
  disabled: computed(() => props.disabled).value,
  closable: computed(() => props.closable).value,
  slot: useSlots().label,
})
</script>

<style scoped></style>
