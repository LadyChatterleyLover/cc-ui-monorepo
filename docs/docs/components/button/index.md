# Button 按钮

## 基础用法

<script setup>
  import {defineAsyncComponent} from 'vue'
  import { SearchOutlined } from '@vicons/antd'

  const CcButton = defineAsyncComponent(() => import('cc-ui-plus/dist/button'))
  const CcIcon = defineAsyncComponent(() => import('cc-ui-plus/dist/icon'))
</script>

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button>default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary">primary</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="success">success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning">warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger">danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info">info</cc-button>
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button>default</cc-button>
  <cc-button type="primary">primary</cc-button>
  <cc-button type="success">success</cc-button>
  <cc-button type="warning">warning</cc-button>
  <cc-button type="danger">danger</cc-button>
  <cc-button type="info">info</cc-button>
</template>
```

</template>
</demo>

## 朴素按钮

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button plain>default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" plain>primary</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="success" plain>success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" plain>warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" plain>danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" plain>info</cc-button>
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button>default</cc-button>
  <cc-button type="primary" plain>primary</cc-button>
  <cc-button type="success" plain>success</cc-button>
  <cc-button type="warning" plain>warning</cc-button>
  <cc-button type="danger" plain>danger</cc-button>
  <cc-button type="info" plain>info</cc-button>
</template>
```

</template>
</demo>

## 圆角按钮

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button round>default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" round>primary</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="success" round>success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" round>warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" round>danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" round>info</cc-button>
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button round>default</cc-button>
  <cc-button type="primary" round>primary</cc-button>
  <cc-button type="success" round>success</cc-button>
  <cc-button type="warning" round>warning</cc-button>
  <cc-button type="danger" round>danger</cc-button>
  <cc-button type="info" round>info</cc-button>
</template>
```

</template>
</demo>

## 禁用按钮

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button disabled>default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" disabled>primary</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="success" disabled>success</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" disabled>warning</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" disabled>danger</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" disabled>info</cc-button>
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button round>default</cc-button>
  <cc-button type="primary" disabled>primary</cc-button>
  <cc-button type="success" disabled>success</cc-button>
  <cc-button type="warning" disabled>warning</cc-button>
  <cc-button type="danger" disabled>danger</cc-button>
  <cc-button type="info" disabled>info</cc-button>
</template>
```

</template>
</demo>

## 圆形按钮

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button circle :icon="SearchOutlined" />
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" circle :icon="SearchOutlined" />
    </div>
    <div style="margin-right: 10px">
      <cc-button type="success" circle :icon="SearchOutlined" />
    </div>
    <div style="margin-right: 10px">
      <cc-button type="warning" circle :icon="SearchOutlined" />
    </div>
    <div style="margin-right: 10px">
      <cc-button type="danger" circle :icon="SearchOutlined" />
    </div>
    <div style="margin-right: 10px">
      <cc-button type="info" circle :icon="SearchOutlined" />
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button round :icon="SearchOutlined" />
  <cc-button type="primary" circle :icon="SearchOutlined" />
  <cc-button type="success" circle :icon="SearchOutlined" />
  <cc-button type="warning" circle :icon="SearchOutlined" />
  <cc-button type="danger" circle :icon="SearchOutlined" />
  <cc-button type="info" circle :icon="SearchOutlined" />
</template>

<script setup>
import { SearchOutlined } from '@vicons/antd'
</script>
```

</template>
</demo>

## 不同尺寸

<demo>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <cc-button type="primary" size="small">small</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary">default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" size="large">large</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" size="small" :icon="SearchOutlined">small</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" :icon="SearchOutlined">default</cc-button>
    </div>
    <div style="margin-right: 10px">
      <cc-button type="primary" size="large" :icon="SearchOutlined">large</cc-button>
    </div>
  </div>
  
  <template #source>

```vue
<template>
  <cc-button type="primary" size="small" :icon="SearchOutlined"
    >small</cc-button
  >
  <cc-button type="primary" :icon="SearchOutlined">default</cc-button>
  <cc-button type="primary" size="large" :icon="SearchOutlined"
    >large</cc-button
  >
</template>

<script setup>
import { SearchOutlined } from '@vicons/antd'
</script>
```

</template>
</demo>

## Button 属性

| 属性       | 说明             | 类型                                            | 默认值 |
| :--------- | :--------------- | :---------------------------------------------- | :----- |
| type       | 按钮类型         | primary \| success \| warning \| danger \| info | -      |
| size       | 图标尺寸         | small \| large                                  | -      |
| plain      | 是否是朴素按钮   | boolean                                         | false  |
| round      | 是否是圆角按钮   | boolean                                         | false  |
| circle     | 是否是圆形按钮   | boolean                                         | false  |
| disabled   | 是否是禁用状态   | boolean                                         | false  |
| nativeType | 原生 button 属性 | button \| submit \| reset                       | button |
| icon       | 按钮图标         | Component                                       | -      |

## Button 事件

| 事件名 | 说明     | 参数          |
| :----- | :------- | :------------ |
| click  | 点击事件 | e: MouseEvent |

## Button 插槽

| 事件名  | 说明     |
| :------ | :------- |
| default | 按钮内容 |
