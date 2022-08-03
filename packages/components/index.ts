import Icon from './icon'
import Button from './button'
import '@cc-ui/theme-chalk'
import type { App } from 'vue'

const components = [Icon, Button]

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
