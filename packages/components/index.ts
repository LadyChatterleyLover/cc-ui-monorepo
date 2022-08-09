import CcIcon from './icon'
import CcButton from './button'
import CcInput from './input'
import CcMessage from './message/src/message'
import message from './message'
import TabsInstall from './tabs'
import FormInstall from './form'
import type { App } from 'vue'

const { Tabs: CcTabs, TabPane: CcTabPane } = TabsInstall
const { Form: CcForm, FormItem: CcFormItem } = FormInstall

const components = [
  CcIcon,
  CcButton,
  CcInput,
  message,
  CcTabs,
  CcTabPane,
  CcForm,
  CcFormItem,
]

export {
  CcButton,
  CcIcon,
  CcMessage,
  CcTabs,
  CcInput,
  CcTabPane,
  CcForm,
  CcFormItem,
}

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
