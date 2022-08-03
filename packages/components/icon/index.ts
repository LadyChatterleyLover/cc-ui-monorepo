import { withInstall } from '@cc-ui/utils'
import _Icon from './src/icon.vue'
const Icon = withInstall(_Icon, 'cc-icon')

export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    CcIcon: typeof Icon
  }
}
