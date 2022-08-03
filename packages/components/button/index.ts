import { withInstall } from '@cc-ui/utils'
import _Button from './src/button.vue'
import '@cc-ui/theme-chalk/button/index.scss'

const Button = withInstall(_Button, 'cc-button')

export default Button

declare module 'vue' {
  export interface GlobalComponents {
    CcButton: typeof Button
  }
}
