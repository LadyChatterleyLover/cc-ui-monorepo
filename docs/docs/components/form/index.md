<ClientOnly>
# Form 表单

## 基础用法

<script setup>
  import { ref } from 'vue'

  const form = ref()
  const model = ref({
    username: '',
    password: '',
  })

  const rules = ref(
    {
      username: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 15,
          message: '密码在6-15位之间',
          trigger: 'blur'
        }
      ]
    }
  )

  const submit = () => {
    form.value.validate(valid => {
      if (valid) {
        Message.success('提交成功')
      } else {
        Message.error('提交失败')
      }
    })
  }
</script>

<demo>
 <cc-form ref="form" :model="model" :rules="rules" label-width="90">
  <cc-form-item prop="username" label="用户名">
    <cc-input v-model="model.username" placeholder="请输入用户名" />
  </cc-form-item>
  <cc-form-item prop="password" label="密码">
    <cc-input v-model="model.password" show-password placeholder="请输入密码" />
  </cc-form-item>
  <cc-form-item>
    <cc-button @click="submit">提交</cc-button>
  </cc-form-item>
 </cc-form>

<template #source>

```vue
<template>
  <cc-form ref="form" :model="model" :rules="rules" label-width="90">
    <cc-form-item prop="username" label="用户名">
      <cc-input v-model="model.username" placeholder="请输入用户名" />
    </cc-form-item>
    <cc-form-item prop="password" label="密码">
      <cc-input v-model="model.password" placeholder="请输入密码" />
    </cc-form-item>
    <cc-form-item>
      <cc-button @click="submit">提交</cc-button>
    </cc-form-item>
  </cc-form>
</template>

<script setup>
import { ref } from 'vue'
import { Message } from '@cc-ui/components'
const form = ref()
const model = ref({
  username: '',
  password: '',
})

const rules = ref([
  {
    username: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur',
      },
    ],
  },
])

const submit = () => {
  form.value.validate((valid) => {
    if (valid) {
      Message.success('提交成功')
    } else {
      Message.error('提交失败')
    }
  })
}
</script>
```

 </template>
</demo>

## Form 属性

| 属性        | 说明         | 类型                  | 默认值 |
| :---------- | :----------- | :-------------------- | :----- |
| model       | 表单数据对象 | `Record<string, any>` | -      |
| rules       | 表单验证规则 | FormRules             | -      |
| inline      | 行内表单模式 | FormRules             | -      |
| label-width | 标签的长度   | string \| number      | -      |

## Form 方法

| 方法名        | 说明                                                        | 类型                                                                                                                             |
| :------------ | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| validate      | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise | `(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>`                                  |
| validateField | 验证具体的某个字段                                          | `(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>` |
| resetFields   | 重置该表单项，将其值重置为初始值，并移除校验结果            | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |
| clearValidate | 清理某个字段的表单验证信息                                  | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |

## Form 插槽

| 属性    | 说明           | 子标签   |
| :------ | :------------- | :------- |
| default | 自定义默认内容 | FormItem |

## FormItem 属性

| 属性         | 说明                                         | 类型                    | 默认值 |
| :----------- | :------------------------------------------- | :---------------------- | :----- |
| prop         | model 的键名, 必填                           | string                  | -      |
| label        | 标签文本                                     | string                  | -      |
| label-width  | 标签宽度                                     | string \| number        | -      |
| required     | 是否为必填项，如不设置，则会根据校验规则确认 | boolean                 | false  |
| labelAlign   | 标签对齐方式                                 | left \| right \| center | left   |
| contentAlign | 内容对齐方式                                 | left \| right \| center | left   |

## FormItem 插槽

| 属性    | 说明       |
| :------ | :--------- |
| default | 表单的内容 |

</ClientOnly>
