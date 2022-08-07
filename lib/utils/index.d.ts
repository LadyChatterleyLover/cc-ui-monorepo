import { Plugin, AppContext } from 'vue'

declare type SFCWithPlugin<T> = T & Plugin
declare type SFCInstallWithContext<T> = SFCWithPlugin<T> & {
  _context: AppContext | null
}
declare function withInstall<T>(c: T, name: string): SFCWithPlugin<T>
declare const withInstallFunction: <T>(
  fn: T,
  name: string
) => SFCInstallWithContext<T>

export {
  SFCInstallWithContext,
  SFCWithPlugin,
  withInstall,
  withInstallFunction,
}
