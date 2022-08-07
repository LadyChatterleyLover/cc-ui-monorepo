import Icon from './icon'
import Button from './button'
import Input from './input'
import Message from './message/src/message'
import message from './message'
import TabsInstall from './tabs'
import FormInstall from './form'
import type { App } from 'vue'

const { Tabs, TabPane } = TabsInstall
const { Form, FormItem } = FormInstall

const components = [Icon, Button, Input, message, Tabs, TabPane, Form, FormItem]

export { Button, Icon, Message, Tabs, TabPane, Form, FormItem }

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
