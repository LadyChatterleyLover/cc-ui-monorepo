import { withInstallFunction } from '@cc-ui/utils/type'
import message from './src/message'

export * from './src/message'

const Message = withInstallFunction(message, '$message')
export default Message
