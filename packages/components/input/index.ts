import { withInstall } from '@cc-ui/utils'
import _Input from './src/input.vue'

const Input = withInstall(_Input, 'cc-input')

export default Input

declare module 'vue' {
  export interface GlobalComponents {
    CcInput: typeof Input
  }
}
