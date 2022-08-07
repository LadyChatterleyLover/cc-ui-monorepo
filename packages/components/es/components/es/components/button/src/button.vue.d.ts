import { type Component } from 'vue'
import type { SizeProps, TypeProps } from '../../types'
declare const _sfc_main: import('vue').DefineComponent<
  {
    size: {
      type: null
      required: false
      default: string
    }
    type: {
      type: null
      required: false
      default: string
    }
    plain: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    round: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    circle: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    disabled: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    nativeType: {
      type: StringConstructor
      required: false
      default: string
    }
    icon: {
      type: null
      required: false
    }
  },
  {
    ns: import('@cc-ui/hooks').UseNamespace
    props: {
      size: SizeProps
      type: TypeProps
      plain: boolean
      round: boolean
      circle: boolean
      disabled: boolean
      nativeType: 'button' | 'submit' | 'reset'
      icon?:
        | Component<
            any,
            any,
            any,
            import('vue').ComputedOptions,
            import('vue').MethodOptions
          >
        | undefined
    }
    emits: (event: 'click', ...args: any[]) => void
    handleClick: (e: MouseEvent) => void
    sizeClass: any
    typeClass: any
    isPlainClass: import('vue').ComputedRef<'' | 'is-plain'>
    isRoundClass: import('vue').ComputedRef<'' | 'is-round'>
    isDisabledClass: import('vue').ComputedRef<'' | 'is-disabled'>
    isCircleClass: import('vue').ComputedRef<'' | 'is-circle'>
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  'click'[],
  'click',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      size: {
        type: null
        required: false
        default: string
      }
      type: {
        type: null
        required: false
        default: string
      }
      plain: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      round: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      circle: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      disabled: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      nativeType: {
        type: StringConstructor
        required: false
        default: string
      }
      icon: {
        type: null
        required: false
      }
    }>
  > & {
    onClick?: ((...args: any[]) => any) | undefined
  },
  {
    type: any
    disabled: boolean
    size: any
    plain: boolean
    round: boolean
    circle: boolean
    nativeType: string
  }
>
export default _sfc_main
