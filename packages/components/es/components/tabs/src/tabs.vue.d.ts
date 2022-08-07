import type { TabPaneContext } from '../types'
declare const _sfc_main: import('vue').DefineComponent<
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
      event: 'update:modelValue' | 'tab-click' | 'tab-remove' | 'tab-change',
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
    addTabPaneContext: (context: TabPaneContext) => void
    removeTabPane: (name: string | number, index: number) => void
    handleClick: (item: TabPaneContext, e: Event) => void
    setActiveBarStyle: (currentName: string | number, flag?: boolean) => void
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
export default _sfc_main
