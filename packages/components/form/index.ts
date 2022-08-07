import { withInstall } from '@cc-ui/utils'
import _Form from './src/form.vue'
import _FormItem from './src/form-item.vue'
const Form = withInstall(_Form, 'cc-form')
const FormItem = withInstall(_FormItem, 'cc-form-item')

export default {
  Form,
  FormItem,
}

declare module 'vue' {
  export interface GlobalComponents {
    CcForm: typeof Form
    CcFormItem: typeof FormItem
  }
}
