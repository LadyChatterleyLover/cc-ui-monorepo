import type { MessageOptions } from '../types'
declare const Message: {
  (options: MessageOptions): void
  success(options: MessageOptions | string): void
  info(options: MessageOptions | string): void
  warning(options: MessageOptions | string): void
  error(options: MessageOptions | string): void
}
export default Message
