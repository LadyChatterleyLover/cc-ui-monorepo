import type { TabPaneContext } from '../types'
import type { ComputedRef, InjectionKey } from 'vue'

export const TabsInjectionKey: InjectionKey<{
  addTabPaneContext: (instance: TabPaneContext) => void
  currentName: ComputedRef<string | number>
}> = Symbol('TabsProvide')
