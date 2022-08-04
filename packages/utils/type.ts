import type { App, AppContext, Plugin } from 'vue'

export type SFCWithPlugin<T> = T & Plugin
export type SFCInstallWithContext<T> = SFCWithPlugin<T> & {
  _context: AppContext | null
}

export function withInstall<T>(c: T, name: string) {
  ;(c as SFCWithPlugin<T>).install = (app: App) => {
    app.component(name, c as SFCWithPlugin<T>)
  }
  return c as SFCWithPlugin<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithPlugin<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
