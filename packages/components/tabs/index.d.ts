declare const Tabs: import('@cc-ui-plus/utils').SFCWithPlugin<
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
      ns: import('@cc-ui-plus/hooks').UseNamespace
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
      addTabPaneContext: (context: import('./types').TabPaneContext) => void
      removeTabPane: (name: string | number, index: number) => void
      handleClick: (item: import('./types').TabPaneContext, e: Event) => void
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
                readonly size: import('vue').PropType<
                  string | number | undefined
                >
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
>
declare const TabPane: import('@cc-ui-plus/utils').SFCWithPlugin<
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
      addTabPaneContext: (instance: import('./types').TabPaneContext) => void
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
declare const _default: {
  Tabs: import('@cc-ui-plus/utils').SFCWithPlugin<
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
        ns: import('@cc-ui-plus/hooks').UseNamespace
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
        addTabPaneContext: (context: import('./types').TabPaneContext) => void
        removeTabPane: (name: string | number, index: number) => void
        handleClick: (item: import('./types').TabPaneContext, e: Event) => void
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
                  readonly size: import('vue').PropType<
                    string | number | undefined
                  >
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
  >
  TabPane: import('@cc-ui-plus/utils').SFCWithPlugin<
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
        addTabPaneContext: (instance: import('./types').TabPaneContext) => void
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
}
export default _default
declare module 'vue' {
  interface GlobalComponents {
    CcTabs: typeof Tabs
    CcTabPane: typeof TabPane
  }
}
