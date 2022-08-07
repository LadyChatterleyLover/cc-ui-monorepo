import type { Callback, RuleItem } from '../types'
export interface Rules {
  [key: string]: RuleItem[]
}
declare const _sfc_main: import('vue').DefineComponent<
  {
    model: {
      type: ObjectConstructor
      required: true
    }
    rules: {
      type: ObjectConstructor
      required: false
    }
    labelWidth: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
      default: string
    }
    inline: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
  },
  {
    props: {
      model: Record<string, any>
      rules?: Rules | undefined
      labelWidth: number | string
      inline: boolean
    }
    filedList: import('vue').Ref<any[]>
    addFiled: (filed: any) => void
    validate: (callback: Callback) => void
    validateField: (prop: string, callback: Callback) => void
    resetFields: () => void
    clearValidate: (prop: string) => void
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
      model: {
        type: ObjectConstructor
        required: true
      }
      rules: {
        type: ObjectConstructor
        required: false
      }
      labelWidth: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
        default: string
      }
      inline: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
    }>
  >,
  {
    labelWidth: string | number
    inline: boolean
  }
>
export default _sfc_main
