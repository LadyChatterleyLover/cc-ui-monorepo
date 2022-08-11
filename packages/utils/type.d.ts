import type { AppContext, Plugin } from 'vue'
export declare type SFCWithPlugin<T> = T & Plugin
export declare type SFCInstallWithContext<T> = SFCWithPlugin<T> & {
  _context: AppContext | null
}
export declare function withInstall<T>(c: T, name: string): SFCWithPlugin<T>
export declare const withInstallFunction: <T>(
  fn: T,
  name: string
) => SFCInstallWithContext<T>
