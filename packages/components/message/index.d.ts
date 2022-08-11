export * from './src/message'
declare const Message: import('@cc-ui-plus/utils').SFCInstallWithContext<{
  (options: import('./types').MessageOptions): void
  success(options: string | import('./types').MessageOptions): void
  info(options: string | import('./types').MessageOptions): void
  warning(options: string | import('./types').MessageOptions): void
  error(options: string | import('./types').MessageOptions): void
}>
export default Message
