<ClientOnly>
# Input 输入框

## 基本用法

<script setup>
  import { ref } from 'vue'
  import { SearchOutlined } from '@vicons/antd'
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
  const value4 = ref('')
  const value5 = ref('')
</script>

<demo>
  <cc-input v-model="value1" placeholder="请输入" />

<template #source>

```vue
<template>
  <cc-input v-model="value1" placeholder="请输入" />
</template>
```

 </template> 
</demo>

## 禁用状态

<demo>
  <cc-input v-model="value2" placeholder="请输入" disabled />

<template #source>

```vue
<template>
  <cc-input v-model="value2" placeholder="请输入" disabled />
</template>
```

 </template> 
</demo>

## 一键清空

<demo>
  <cc-input v-model="value3" placeholder="请输入" clearable />

<template #source>

```vue
<template>
  <cc-input v-model="value3" placeholder="请输入" clearable />
</template>
```

 </template> 
</demo>

## 密码框

<demo>
  <cc-input v-model="value4" placeholder="请输入" show-password />

<template #source>

```vue
<template>
  <cc-input v-model="value4" placeholder="请输入" show-password />
</template>
```

 </template> 
</demo>

## 带图标的输入框

<demo>
  <cc-input v-model="value5" placeholder="请输入" :prefix-icon="SearchOutlined" />
  <br />
  <br />
  <cc-input v-model="value5" placeholder="请输入" :suffix-icon="SearchOutlined" />
  <br />
  <br />
  <cc-input v-model="value5" placeholder="请输入">
    <template #prefix>
      <cc-icon>
        <SearchOutlined />
      </cc-icon>
    </template>
  </cc-input>
  <br />
  <br />
  <cc-input v-model="value5" placeholder="请输入">
    <template #suffix>
      <cc-icon>
        <SearchOutlined />
      </cc-icon>
    </template>
  </cc-input>

<template #source>

```vue
<template>
  <cc-input
    v-model="value5"
    placeholder="请输入"
    :prefix-icon="SearchOutlined"
  />
  <cc-input
    v-model="value5"
    placeholder="请输入"
    :suffix-icon="SearchOutlined"
  />
  <cc-input v-model="value5" placeholder="请输入">
    <template #prefix>
      <cc-icon>
        <SearchOutlined />
      </cc-icon>
    </template>
  </cc-input>
  <cc-input v-model="value5" placeholder="请输入">
    <template #suffix>
      <cc-icon>
        <SearchOutlined />
      </cc-icon>
    </template>
  </cc-input>
</template>
```

 </template> 
</demo>

## 输入长度限制

<demo>
  <cc-input v-model="value4" placeholder="请输入" show-word-limit maxlength="10" />
  <br />
  <br />
  <cc-input v-model="value4" placeholder="请输入" type="textarea" show-word-limit maxlength="10" />
<template #source>

```vue
<template>
  <cc-input
    v-model="value4"
    placeholder="请输入"
    show-word-limit
    maxlength="10"
  />
  <cc-input
    v-model="value4"
    placeholder="请输入"
    type="textarea"
    show-word-limit
    maxlength="10"
  />
</template>
```

 </template> 
</demo>

## Input 属性

| 属性            | 说明                                                                 | 类型                                 | 默认值 |
| :-------------- | :------------------------------------------------------------------- | :----------------------------------- | :----- |
| type            | 输入框类型                                                           | text，textarea 和其他原生 input 的值 | text   |
| v-model         | 绑定值                                                               | string \| number                     | -      |
| maxlength       | 最大输入长度                                                         | string \| number                     | -      |
| minlength       | 原生属性，最小输入长度                                               | number                               | -      |
| show-word-limit | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效 | boolean                              | false  |
| placeholder     | 输入框占位文本                                                       | string                               | -      |
| clearable       | 输入框占位文本                                                       | boolean                              | false  |
| show-password   | 是否显示切换密码图标                                                 | boolean                              | false  |
| disabled        | 是否禁用                                                             | boolean                              | false  |
| prefix-icon     | 自定义前缀图标                                                       | Component                            | -      |
| suffix-icon     | 自定义后缀图标                                                       | Component                            | -      |
| rows            | 输入框行数，仅 type 为 'textarea' 时有效                             | number \| string                     | 1      |

## Input 插槽

| 属性   | 说明                                        |
| :----- | :------------------------------------------ |
| prefix | 输入框头部内容，只对非 type="textarea" 有效 |
| suffix | 输入框尾部内容，只对非 type="textarea" 有效 |

## Input 事件

| 属性   | 说明                                                          | 参数                      |
| :----- | :------------------------------------------------------------ | :------------------------ |
| blur   | 在 Input 失去焦点时触发                                       | (event: Event)            |
| focus  | 在 Input 获得焦点时触发                                       | (event: Event)            |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | (value: string \| number) |
| input  | 在 Input 值改变时触发                                         | (value: string \| number) |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发                   | -                         |

## Input 方法

| 方法  | 说明              | 参数 |
| :---- | :---------------- | :--- |
| focus | 使 input 获取焦点 | -    |
| blur  | 使 input 失去焦点 | -    |

</ClientOnly>
