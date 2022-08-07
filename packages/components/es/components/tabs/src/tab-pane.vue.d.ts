declare const _sfc_main: import('vue').DefineComponent<
  {
    label: {
      type: StringConstructor
      required: false
      default: string
    }
    name: {
      type: (StringConstructor | NumberConstructor)[]
      required: true
    }
    disabled: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    closable: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
  },
  {
    addTabPaneContext: (instance: import('../types').TabPaneContext) => void
    currentName: import('vue').ComputedRef<string | number>
    props: {
      label: string
      name: string | number
      disabled: boolean
      closable: boolean
    }
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
      label: {
        type: StringConstructor
        required: false
        default: string
      }
      name: {
        type: (StringConstructor | NumberConstructor)[]
        required: true
      }
      disabled: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      closable: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
    }>
  >,
  {
    closable: boolean
    label: string
    disabled: boolean
  }
>
export default _sfc_main
