declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >
  export default component
}
declare module '*.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}

declare module 'turndown' {
  const turndown: any
  export default turndown
}
