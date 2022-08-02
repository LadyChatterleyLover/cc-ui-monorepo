import type { App } from 'vue'
import Icon from './icon'
const components = [Icon]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
