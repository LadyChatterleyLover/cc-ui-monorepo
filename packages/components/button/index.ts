import { withInstall } from '@cc-ui/utils'
import _Button from './src/button.vue'

const Button = withInstall(_Button, 'cc-button')

export default Button

declare module 'vue' {
  export interface GlobalComponents {
    CcButton: typeof Button
  }
}
