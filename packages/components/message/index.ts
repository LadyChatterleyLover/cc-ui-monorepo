import { withInstallFunction } from '@cc-ui/utils/type'
import '@cc-ui/theme-chalk/message/index.scss'
import message from './src/message'

export * from './src/message'

const Message = withInstallFunction(message, '$message')
export default Message
