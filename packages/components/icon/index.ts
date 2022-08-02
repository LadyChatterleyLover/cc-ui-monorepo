import _Icon from './src/icon.vue'
import { withInstall } from '@cc-ui/utils'
const Icon = withInstall(_Icon, 'cc-icon')

export * from './src/props-type'

export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    CcIcon: typeof Icon
  }
}
