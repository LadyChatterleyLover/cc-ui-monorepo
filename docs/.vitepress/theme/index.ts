import DefaultTheme from 'vitepress/theme'
import CcUI from '@cc-ui/components'
import Demo from '../../common/demo/demo.vue'
import '../../styles/index.scss'
import type { Theme } from 'vitepress'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.use(CcUI)
  },
}

export default theme