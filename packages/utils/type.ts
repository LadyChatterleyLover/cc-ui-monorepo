import type { App, Plugin } from 'vue'

export type SFCWithPlugin<T> = T & Plugin

export function withInstall<T>(c: T, name: string) {
  (c as SFCWithPlugin<T>).install = (app: App) => {
    app.component(name, c as SFCWithPlugin<T>)
  }
  return c as SFCWithPlugin<T>
}
