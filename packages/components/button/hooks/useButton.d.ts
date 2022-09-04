import type { SizeProps, TypeProps } from '../../types'
import type { UseNamespace } from '@element-plus/hooks/useNamespace'
import type { ComputedRef } from 'vue'
export declare const useSize: (
  ns: UseNamespace,
  size: ComputedRef<SizeProps>
) => string | undefined
export declare const useType: (
  ns: UseNamespace,
  type: ComputedRef<TypeProps>
) => string | undefined
