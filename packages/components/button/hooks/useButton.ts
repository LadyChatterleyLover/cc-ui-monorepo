import type { SizeProps, TypeProps } from '../../types'
import type { UseNamespace } from '@element-plus/hooks/useNamespace'
import type { ComputedRef } from 'vue'

export const useSize = (ns: UseNamespace, size: ComputedRef<SizeProps>) => {
  if (size.value === '') {
    return ''
  } else if (size.value === 'small') {
    return ns.m('small')
  } else if (size.value === 'large') {
    return ns.m('large')
  }
}

export const useType = (ns: UseNamespace, type: ComputedRef<TypeProps>) => {
  if (type.value === '') {
    return ns.m('default')
  } else if (type.value === 'primary') {
    return ns.m('primary')
  } else if (type.value === 'success') {
    return ns.m('success')
  } else if (type.value === 'warning') {
    return ns.m('warning')
  } else if (type.value === 'danger') {
    return ns.m('danger')
  } else if (type.value === 'info') {
    return ns.m('info')
  }
}
