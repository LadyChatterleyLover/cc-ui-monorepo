declare const Icon: import('@cc-ui/utils').SFCWithPlugin<
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
export default Icon
declare module 'vue' {
  interface GlobalComponents {
    CcIcon: typeof Icon
  }
}
