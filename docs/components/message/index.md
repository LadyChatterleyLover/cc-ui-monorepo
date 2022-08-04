# Message 信息

## 基础用法

<script setup>
  import { Message } from '@cc-ui/components'
</script>

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button type="success" @click="Message.success('success message')">success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" @click="Message.warning('warning message')">warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" @click="Message.danger('danger message')">danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" @click="Message('message')">message</cc-button>
    </div>
  </div>

<template #source>

```vue
<template>
  <cc-button>default</cc-button>
  <cc-button type="success" @click="open1">success</cc-button>
  <cc-button type="warning" @click="open2">warning</cc-button>
  <cc-button type="danger" @click="open3">danger</cc-button>
  <cc-button type="info" @click="open4">message</cc-button>
</template>

<script setup>
import { Message } from '@cc-ui/components'

const open1 = () => {
  Message.success('success message')
}
const open2 = () => {
  Message.warning('warning message')
}
const open3 = () => {
  Message.danger('danger message')
}
const open4 = () => {
  Message('message')
}
</script>
```

</template>
</demo>

## 可关闭的消息提示

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button type="success" @click="Message.success({message: 'success message', showClose: true})">success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" @click="Message.warning({message: 'warning message', showClose: true})">warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" @click="Message.danger({message: 'danger message', showClose: true})">danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" @click="Message({message: 'message', showClose: true})">message</cc-button>
    </div>
  </div>

<template #source>

```vue
<template>
  <cc-button>default</cc-button>
  <cc-button type="success" @click="open1">success</cc-button>
  <cc-button type="warning" @click="open2">warning</cc-button>
  <cc-button type="danger" @click="open3">danger</cc-button>
  <cc-button type="info" @click="open4">message</cc-button>
</template>

<script setup>
import { Message } from '@cc-ui/components'

const open1 = () => {
  Message.success({
    message: 'success message',
    showClose: true,
  })
}
const open2 = () => {
  Message.warning({
    message: 'warning message',
    showClose: true,
  })
}
const open3 = () => {
  Message.danger({
    message: 'danger message',
    showClose: true,
  })
}
const open4 = () => {
  Message({
    message: 'message',
    showClose: true,
  })
}
</script>
```

</template>
</demo>

## 文字居中

<demo>
 <cc-button type="success" @click="Message.success({message: 'success message', center: true})">success</cc-button>

<template #source>

```vue
<template>
  <cc-button type="success" @click="open">success</cc-button>
</template>

<script setup>
const open = () => {
  Message.success({ message: 'success message', center: true })
}
</script>
```

</template>
</demo>

## Message 属性

| 属性      | 说明                 | 类型                                            | 默认值 |
| :-------- | :------------------- | :---------------------------------------------- | :----- |
| type      | 消息提示类型         | primary \| success \| warning \| danger \| info | -      |
| message   | 消息提示内容         | string                                          | -      |
| center    | 内容是否居中         | boolean                                         | false  |
| showClose | 是否显示关闭按钮     | boolean                                         | false  |
| offset    | 消息提示距离顶部位置 | number \| string                                | 20     |
