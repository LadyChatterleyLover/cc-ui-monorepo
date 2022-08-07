import { type ComputedRef } from 'vue'
import type { Rules } from '../types'
declare const _sfc_main: import('vue').DefineComponent<
  {
    label: {
      type: StringConstructor
      required: false
      default: string
    }
    prop: {
      type: StringConstructor
      required: false
      default: string
    }
    labelWidth: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
      default: string
    }
    required: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    labelAlign: {
      type: StringConstructor
      required: false
      default: string
    }
    contentAlign: {
      type: StringConstructor
      required: false
      default: string
    }
  },
  {
    ns: import('@cc-ui/hooks/useNamespace').UseNamespace
    props: {
      label: string
      prop: string
      labelWidth: number | string
      required: boolean
      labelAlign: 'left' | 'center' | 'right'
      contentAlign: 'left' | 'center' | 'right'
    }
    errorMessage: import('vue').Ref<string>
    validateChangeFlag: import('vue').Ref<number>
    validateBlurFlag: import('vue').Ref<number>
    rules: import('vue').Ref<Rules | Rules[] | undefined>
    initValue: import('vue').Ref<any>
    parentLabelWidth: ComputedRef<string | number> | undefined
    inline: ComputedRef<boolean> | undefined
    computedLabelWidth: ComputedRef<string>
    setValidateBlurFlag: (n: number) => void
    setValidateChangeFlag: (n: number) => void
    model: ComputedRef<Record<string, any>> | undefined
    parentRules: ComputedRef<Rules | Rules[]> | undefined
    addFiled: any
    isRequired: ComputedRef<false | Rules | undefined>
    labelAlignValue: ComputedRef<'flex-start' | 'center' | 'flex-end'>
    contentAlignValue: ComputedRef<'flex-start' | 'center' | 'flex-end'>
    validate: () => Promise<unknown> | undefined
    resetField: () => void
    clearValidate: () => void
    initRules: () => void
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
      prop: {
        type: StringConstructor
        required: false
        default: string
      }
      labelWidth: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
        default: string
      }
      required: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      labelAlign: {
        type: StringConstructor
        required: false
        default: string
      }
      contentAlign: {
        type: StringConstructor
        required: false
        default: string
      }
    }>
  >,
  {
    required: boolean
    label: string
    labelWidth: string | number
    prop: string
    labelAlign: string
    contentAlign: string
  }
>
export default _sfc_main
