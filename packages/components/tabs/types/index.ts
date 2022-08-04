import type { Slot } from 'vue'

export interface TabPaneContext {
  label?: string
  name: string | number
  disabled?: boolean
  closable?: boolean
  slot?: Slot
}
