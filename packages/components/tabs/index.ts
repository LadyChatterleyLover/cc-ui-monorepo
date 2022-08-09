import { withInstall } from '@cc-ui-plus/utils'
import _Tabs from './src/tabs.vue'
import _TabPane from './src/tab-pane.vue'

const Tabs = withInstall(_Tabs, 'cc-tabs')
const TabPane = withInstall(_TabPane, 'cc-tab-pane')

export default {
  Tabs,
  TabPane,
}

declare module 'vue' {
  export interface GlobalComponents {
    CcTabs: typeof Tabs
    CcTabPane: typeof TabPane
  }
}
