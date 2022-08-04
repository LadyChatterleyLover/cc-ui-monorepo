# Icon 图标

推荐使用[xicon](https://www.xicons.org/#/)作为图标库

## 基础用法

可以像使用组件一样使用图标。

<script setup>
import { AirplaneOutline, AccessibilityOutline, AddCircleOutline } from '@vicons/ionicons5'
</script>

<demo>
<cc-icon><AirplaneOutline /></cc-icon>
<cc-icon><AccessibilityOutline /></cc-icon>
<cc-icon><AddCircleOutline /></cc-icon>

<template #source>

```vue
<template>
  <cc-icon><AirplaneOutline /></cc-icon>
  <cc-icon><AccessibilityOutline /></cc-icon>
  <cc-icon><AddCircleOutline /></cc-icon>
</template>

<script setup>
import {
  AccessibilityOutline,
  AddCircleOutline,
  AirplaneOutline,
} from '@vicons/ionicons5'
</script>
```

</template>

</demo>

## 设置尺寸和颜色

也可以设置图标不同的尺寸和颜色。

<demo>
<cc-icon size="40"><AirplaneOutline /></cc-icon>
<cc-icon size="40" color="red"><AddCircleOutline /></cc-icon>

<template #source>

```vue
<template>
  <cc-icon size="40"><AirplaneOutline /></cc-icon>
  <cc-icon size="40" color="red"><AddCircleOutline /></cc-icon>
</template>

<script setup>
import { AddCircleOutline, AirplaneOutline } from '@vicons/ionicons5'
</script>
```

</template>

</demo>

## 设置渲染的标签

可以渲染不同的标签节点，默认为 `span` 标签

<demo>
<cc-icon tag="div"><AirplaneOutline /></cc-icon>

<template #source>

```vue
<template>
  <cc-icon tag="div"><AirplaneOutline /></cc-icon>
</template>

<script setup>
import { AirplaneOutline } from '@vicons/ionicons5'
</script>
```

</template>

</demo>

## Icon 属性

| 属性  | 说明           | 类型             | 默认值 |
| :---- | :------------- | :--------------- | :----- |
| color | 图标颜色       | string           | #000   |
| size  | 图标尺寸       | string \| number | 16     |
| tag   | 图标渲染的标签 | string           | span   |
