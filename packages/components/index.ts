import Icon from './icon'
import Button from './button'
import Message from './message/src/message'
import message from './message'
import TabsInstanll from './tabs'
import '@cc-ui/theme-chalk'
import type { App } from 'vue'

const { Tabs, TabPane } = TabsInstanll

const components = [Icon, Button, message, Tabs, TabPane]

export { Button, Icon, Message }

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
