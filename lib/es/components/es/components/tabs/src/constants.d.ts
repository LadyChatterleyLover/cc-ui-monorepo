import type { TabPaneContext } from '../types'
import type { ComputedRef, InjectionKey } from 'vue'
export declare const TabsInjectionKey: InjectionKey<{
  addTabPaneContext: (instance: TabPaneContext) => void
  currentName: ComputedRef<string | number>
}>
