import DefaultTheme from 'vitepress/theme'
import 'cc-ui-plus/theme-chalk/index.css'
import Demo from '../../common/demo/demo.vue'
import '../../styles/index.scss'
import type { Theme } from 'vitepress'

const first = false

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
  },
}

export default theme
