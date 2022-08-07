import type { MessageType } from '../types'
declare const _sfc_main: import('vue').DefineComponent<
  {
    message: {
      type: StringConstructor
      required: false
      default: string
    }
    type: {
      type: null
      required: false
      default: string
    }
    center: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    showClose: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    offset: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
      default: number
    }
  },
  {
    ns: import('@cc-ui/hooks/useNamespace').UseNamespace
    props: {
      message: string
      type: MessageType
      center: boolean
      showClose: boolean
      offset: number | string
    }
    visible: import('vue').Ref<boolean>
    closeFlag: import('vue').Ref<boolean>
    top: import('vue').Ref<string | number>
    setVisible: (v: boolean, duration?: number) => Promise<unknown>
    setTop: (t: number) => void
    setCloseFlag: (close: boolean) => void
    handleClose: () => void
    computedTypeClass: import('vue').ComputedRef<
      '' | 'bg-success' | 'bg-info' | 'bg-danger' | 'bg-warning'
    >
    CheckCircleOutlined: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >
    CloseCircleOutlined: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >
    CloseOutlined: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >
    InfoCircleOutlined: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >
    Warning: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >
    CcIcon: import('@cc-ui/utils').SFCWithPlugin<
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
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      message: {
        type: StringConstructor
        required: false
        default: string
      }
      type: {
        type: null
        required: false
        default: string
      }
      center: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      showClose: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      offset: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
        default: number
      }
    }>
  >,
  {
    type: any
    center: boolean
    message: string
    showClose: boolean
    offset: string | number
  }
>
export default _sfc_main
