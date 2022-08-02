import Icon from './icon'
import '@cc-ui/theme-chalk'
import type { App } from 'vue'
const components = [Icon]

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
