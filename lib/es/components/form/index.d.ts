declare const Form: import('@cc-ui/utils').SFCWithPlugin<
  import('vue').DefineComponent<
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
        rules?: import('./src/form.vue').Rules | undefined
        labelWidth: string | number
        inline: boolean
      }
      filedList: import('vue').Ref<any[]>
      addFiled: (filed: any) => void
      validate: (callback: import('./types').Callback) => void
      validateField: (
        prop: string,
        callback: import('./types').Callback
      ) => void
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
>
declare const FormItem: import('@cc-ui/utils').SFCWithPlugin<
  import('vue').DefineComponent<
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
        labelWidth: string | number
        required: boolean
        labelAlign: 'left' | 'center' | 'right'
        contentAlign: 'left' | 'center' | 'right'
      }
      errorMessage: import('vue').Ref<string>
      validateChangeFlag: import('vue').Ref<number>
      validateBlurFlag: import('vue').Ref<number>
      rules: import('vue').Ref<
        import('./types').Rules | import('./types').Rules[] | undefined
      >
      initValue: import('vue').Ref<any>
      parentLabelWidth: import('vue').ComputedRef<string | number> | undefined
      inline: import('vue').ComputedRef<boolean> | undefined
      computedLabelWidth: import('vue').ComputedRef<string>
      setValidateBlurFlag: (n: number) => void
      setValidateChangeFlag: (n: number) => void
      model: import('vue').ComputedRef<Record<string, any>> | undefined
      parentRules:
        | import('vue').ComputedRef<
            import('./types').Rules | import('./types').Rules[]
          >
        | undefined
      addFiled: any
      isRequired: import('vue').ComputedRef<
        false | import('./types').Rules | undefined
      >
      labelAlignValue: import('vue').ComputedRef<
        'flex-start' | 'center' | 'flex-end'
      >
      contentAlignValue: import('vue').ComputedRef<
        'flex-start' | 'center' | 'flex-end'
      >
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
>
declare const _default: {
  Form: import('@cc-ui/utils').SFCWithPlugin<
    import('vue').DefineComponent<
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
          rules?: import('./src/form.vue').Rules | undefined
          labelWidth: string | number
          inline: boolean
        }
        filedList: import('vue').Ref<any[]>
        addFiled: (filed: any) => void
        validate: (callback: import('./types').Callback) => void
        validateField: (
          prop: string,
          callback: import('./types').Callback
        ) => void
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
  >
  FormItem: import('@cc-ui/utils').SFCWithPlugin<
    import('vue').DefineComponent<
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
          labelWidth: string | number
          required: boolean
          labelAlign: 'left' | 'center' | 'right'
          contentAlign: 'left' | 'center' | 'right'
        }
        errorMessage: import('vue').Ref<string>
        validateChangeFlag: import('vue').Ref<number>
        validateBlurFlag: import('vue').Ref<number>
        rules: import('vue').Ref<
          import('./types').Rules | import('./types').Rules[] | undefined
        >
        initValue: import('vue').Ref<any>
        parentLabelWidth: import('vue').ComputedRef<string | number> | undefined
        inline: import('vue').ComputedRef<boolean> | undefined
        computedLabelWidth: import('vue').ComputedRef<string>
        setValidateBlurFlag: (n: number) => void
        setValidateChangeFlag: (n: number) => void
        model: import('vue').ComputedRef<Record<string, any>> | undefined
        parentRules:
          | import('vue').ComputedRef<
              import('./types').Rules | import('./types').Rules[]
            >
          | undefined
        addFiled: any
        isRequired: import('vue').ComputedRef<
          false | import('./types').Rules | undefined
        >
        labelAlignValue: import('vue').ComputedRef<
          'flex-start' | 'center' | 'flex-end'
        >
        contentAlignValue: import('vue').ComputedRef<
          'flex-start' | 'center' | 'flex-end'
        >
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
  >
}
export default _default
declare module 'vue' {
  interface GlobalComponents {
    CcForm: typeof Form
    CcFormItem: typeof FormItem
  }
}
