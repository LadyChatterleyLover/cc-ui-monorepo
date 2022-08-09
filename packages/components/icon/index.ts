import { withInstall } from '@cc-ui-plus/utils'
import _Icon from './src/icon.vue'
const Icon = withInstall(_Icon, 'cc-icon')

export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    CcIcon: typeof Icon
  }
}
