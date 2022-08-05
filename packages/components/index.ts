import Icon from './icon'
import Button from './button'
import Input from './input'
import Message from './message/src/message'
import message from './message'
import TabsInstanll from './tabs'
import FormInstanll from './form'
import '@cc-ui/theme-chalk'
import type { App } from 'vue'

const { Tabs, TabPane } = TabsInstanll
const { Form, FormItem } = FormInstanll

const components = [Icon, Button, Input, message, Tabs, TabPane, Form, FormItem]

export { Button, Icon, Message }

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
