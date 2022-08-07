import { type Component } from 'vue'
declare const _sfc_main: import('vue').DefineComponent<
  {
    modelValue: {
      type: StringConstructor
      required: true
    }
    type: {
      type: StringConstructor
      required: false
      default: string
    }
    placeholder: {
      type: StringConstructor
      required: false
      default: string
    }
    maxlength: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
    }
    minlength: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
    }
    clearable: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    disabled: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    readonly: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    showPassword: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    showWordLimit: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    prefixIcon: {
      type: null
      required: false
    }
    suffixIcon: {
      type: null
      required: false
    }
    rows: {
      type: (StringConstructor | NumberConstructor)[]
      required: false
      default: number
    }
  },
  {
    ns: import('@cc-ui/hooks/useNamespace').UseNamespace
    props: {
      modelValue: string
      type: 'text' | 'textarea' | string
      placeholder: string
      maxlength?: string | number | undefined
      minlength?: string | number | undefined
      clearable: boolean
      disabled: boolean
      readonly: boolean
      showPassword: boolean
      showWordLimit: boolean
      prefixIcon?:
        | Component<
            any,
            any,
            any,
            import('vue').ComputedOptions,
            import('vue').MethodOptions
          >
        | undefined
      suffixIcon?:
        | Component<
            any,
            any,
            any,
            import('vue').ComputedOptions,
            import('vue').MethodOptions
          >
        | undefined
      rows: number | string
    }
    emits: (
      event:
        | 'update:modelValue'
        | 'input'
        | 'blur'
        | 'focus'
        | 'clear'
        | 'change',
      ...args: any[]
    ) => void
    setValidateChangeFlag: ((n: number) => void) | undefined
    setValidateBlurFlag: ((n: number) => void) | undefined
    inputFlag: import('vue').Ref<number>
    blurFlag: import('vue').Ref<number>
    inputRef: import('vue').Ref<HTMLInputElement | undefined>
    isPassword: import('vue').Ref<boolean>
    inputValue: import('vue').Ref<string>
    foucs: () => Promise<void>
    blur: () => void | undefined
    handleInput: (e: Event) => void
    handleBlur: (e: Event) => void
    handleFocus: (e: Event) => void
    handleChange: (e: Event) => void
    clear: (e: Event) => void
    handlePasswordVisible: () => void
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
    EyeInvisibleOutlined: import('vue').DefineComponent<
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
    EyeOutlined: import('vue').DefineComponent<
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
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('update:modelValue' | 'input' | 'blur' | 'focus' | 'clear' | 'change')[],
  'update:modelValue' | 'input' | 'blur' | 'focus' | 'clear' | 'change',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      modelValue: {
        type: StringConstructor
        required: true
      }
      type: {
        type: StringConstructor
        required: false
        default: string
      }
      placeholder: {
        type: StringConstructor
        required: false
        default: string
      }
      maxlength: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
      }
      minlength: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
      }
      clearable: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      disabled: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      readonly: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      showPassword: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      showWordLimit: {
        type: BooleanConstructor
        required: false
        default: boolean
      }
      prefixIcon: {
        type: null
        required: false
      }
      suffixIcon: {
        type: null
        required: false
      }
      rows: {
        type: (StringConstructor | NumberConstructor)[]
        required: false
        default: number
      }
    }>
  > & {
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined
    onInput?: ((...args: any[]) => any) | undefined
    onBlur?: ((...args: any[]) => any) | undefined
    onFocus?: ((...args: any[]) => any) | undefined
    onClear?: ((...args: any[]) => any) | undefined
    onChange?: ((...args: any[]) => any) | undefined
  },
  {
    type: string
    disabled: boolean
    placeholder: string
    clearable: boolean
    readonly: boolean
    showPassword: boolean
    showWordLimit: boolean
    rows: string | number
  }
>
export default _sfc_main
