import type { SizeProps, TypeProps } from '../../types'
import type { ComputedRef } from 'vue'
export declare const useSize: (
  ns: UseNamespace,
  size: ComputedRef<SizeProps>
) => any
export declare const useType: (
  ns: UseNamespace,
  type: ComputedRef<TypeProps>
) => any
