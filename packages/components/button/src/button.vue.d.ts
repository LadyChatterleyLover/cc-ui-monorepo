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
    ns: import('@cc-ui-plus/hooks').UseNamespace
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
    sizeClass: string | undefined
    typeClass: string | undefined
    isPlainClass: import('vue').ComputedRef<'' | 'is-plain'>
    isRoundClass: import('vue').ComputedRef<'' | 'is-round'>
    isDisabledClass: import('vue').ComputedRef<'' | 'is-disabled'>
    isCircleClass: import('vue').ComputedRef<'' | 'is-circle'>
    CcIcon: import('@cc-ui-plus/utils').SFCWithPlugin<
      import('vue').DefineComponent<
        {
          color: {
            type: StringConstructor
            required: false
            default: string
          }
          size: {
            type: (StringConstructor | NumberConstructor)[]
            required: false
            default: number
          }
          tag: {
            type: StringConstructor
            required: false
            default: string
          }
        },
        {
          Icon: import('vue').DefineComponent<
            {
              readonly size: import('vue').PropType<string | number | undefined>
              readonly color: StringConstructor
              readonly tag: StringConstructor
            },
            () => import('vue').VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                [key: string]: any
              }
            >,
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            Record<string, any>,
            string,
            import('vue').VNodeProps &
              import('vue').AllowedComponentProps &
              import('vue').ComponentCustomProps,
            Readonly<{
              tag?: string | undefined
              color?: string | undefined
              size?: string | number | undefined
            }>,
            {}
          >
        },
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        Record<string, any>,
        string,
        import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        Readonly<
          import('vue').ExtractPropTypes<{
            color: {
              type: StringConstructor
              required: false
              default: string
            }
            size: {
              type: (StringConstructor | NumberConstructor)[]
              required: false
              default: number
            }
            tag: {
              type: StringConstructor
              required: false
              default: string
            }
          }>
        >,
        {
          color: string
          size: string | number
          tag: string
        }
      >
    >
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
