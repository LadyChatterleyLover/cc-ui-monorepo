import Icon from './components/icon'
import Button from './components/button'
import Message from './components/message/src/message'
import type { App } from 'vue'
declare const Tabs: import('@cc-ui/utils').SFCWithPlugin<
    import('vue').DefineComponent<
      {
        modelValue: {
          type: (StringConstructor | NumberConstructor)[]
          required: true
        }
        type: {
          type: StringConstructor
          required: false
          default: string
        }
        closable: {
          type: BooleanConstructor
          required: false
          default: boolean
        }
        addable: {
          type: BooleanConstructor
          required: false
          default: boolean
        }
        editable: {
          type: BooleanConstructor
          required: false
          default: boolean
        }
      },
      {
        ns: import('@cc-ui/hooks/useNamespace').UseNamespace
        uid: number | undefined
        props: {
          modelValue: string | number
          type: '' | 'card' | 'border-card'
          closable: boolean
          addable: boolean
          editable: boolean
        }
        emits: (
          event:
            | 'update:modelValue'
            | 'tab-click'
            | 'tab-remove'
            | 'tab-change',
          ...args: any[]
        ) => void
        tabPaneList: import('vue').Ref<
          {
            label?: string | undefined
            name: string | number
            disabled?: boolean | undefined
            closable?: boolean | undefined
            slot?: import('vue').Slot | undefined
          }[]
        >
        currentName: import('vue').Ref<string | number>
        activeBarWidth: import('vue').Ref<string>
        activeBarTranslate: import('vue').Ref<string>
        wrap: import('vue').Ref<HTMLDivElement | undefined>
        label: import('vue').Ref<HTMLDivElement | undefined>
        isOverflow: import('vue').Ref<boolean>
        translateX: import('vue').Ref<number>
        addTabPaneContext: (
          context: import('./components/tabs/types').TabPaneContext
        ) => void
        removeTabPane: (name: string | number, index: number) => void
        handleClick: (
          item: import('./components/tabs/types').TabPaneContext,
          e: Event
        ) => void
        setActiveBarStyle: (
          currentName: string | number,
          flag?: boolean
        ) => void
        handlePrev: () => void
        handleNext: () => void
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
        LeftOutlined: import('vue').DefineComponent<
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
        RightOutlined: import('vue').DefineComponent<
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
      ('update:modelValue' | 'tab-click' | 'tab-remove' | 'tab-change')[],
      'update:modelValue' | 'tab-click' | 'tab-remove' | 'tab-change',
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<{
          modelValue: {
            type: (StringConstructor | NumberConstructor)[]
            required: true
          }
          type: {
            type: StringConstructor
            required: false
            default: string
          }
          closable: {
            type: BooleanConstructor
            required: false
            default: boolean
          }
          addable: {
            type: BooleanConstructor
            required: false
            default: boolean
          }
          editable: {
            type: BooleanConstructor
            required: false
            default: boolean
          }
        }>
      > & {
        'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined
        'onTab-click'?: ((...args: any[]) => any) | undefined
        'onTab-remove'?: ((...args: any[]) => any) | undefined
        'onTab-change'?: ((...args: any[]) => any) | undefined
      },
      {
        type: string
        closable: boolean
        addable: boolean
        editable: boolean
      }
    >
  >,
  TabPane: import('@cc-ui/utils').SFCWithPlugin<
    import('vue').DefineComponent<
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
        addTabPaneContext: (
          instance: import('./components/tabs/types').TabPaneContext
        ) => void
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
  >
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
          rules?: import('./components/form/src/form.vue').Rules | undefined
          labelWidth: string | number
          inline: boolean
        }
        filedList: import('vue').Ref<any[]>
        addFiled: (filed: any) => void
        validate: (callback: import('./components/form/types').Callback) => void
        validateField: (
          prop: string,
          callback: import('./components/form/types').Callback
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
  >,
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
          | import('./components/form/types').Rules
          | import('./components/form/types').Rules[]
          | undefined
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
              | import('./components/form/types').Rules
              | import('./components/form/types').Rules[]
            >
          | undefined
        addFiled: any
        isRequired: import('vue').ComputedRef<
          false | import('./components/form/types').Rules | undefined
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
export { Button, Icon, Message, Tabs, TabPane, Form, FormItem }
declare const _default: {
  install(app: App): void
}
export default _default
