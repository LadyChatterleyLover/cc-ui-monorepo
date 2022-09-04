<ClientOnly>
# Tabs 标签页

<script setup>
  import { ref, defineAsyncComponent } from 'vue'
  import { CalendarOutlined } from '@vicons/antd'

  const CcTabs = defineAsyncComponent(() => import('cc-ui-plus/dist/tabs'))
  const CcTabPane = defineAsyncComponent(() => import('cc-ui-plus/dist/tabs'))
  const CcIcon = defineAsyncComponent(() => import('cc-ui-plus/dist/icon'))
  const CcButton = defineAsyncComponent(() => import('cc-ui-plus/dist/button'))

  const activeName = ref('first')

  const handleClick = () => {
    
  }

  let tabIndex = 2
  const editableTabsValue = ref('2')
  const editableTabs = ref([
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ])

  const addTab = (targetName) => {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: `New Tab`,
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  }
  const removeTab = (targetName) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)

}
</script>

## 基础用法

<style>
  .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>

<demo>
 <cc-tabs v-model="activeName" @tab-click="handleClick">
   <cc-tab-pane label="User" name="first">User Content</cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
 </cc-tabs>

<template #source>

```vue
<template>
  <cc-tabs v-model="activeName">
    <cc-tab-pane label="User" name="first">User</cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task</cc-tab-pane>
  </cc-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>
```

 </template>
</demo>

## 卡片风格

<demo>
 <cc-tabs v-model="activeName" type="card">
   <cc-tab-pane label="User" name="first">User Content</cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
 </cc-tabs>

<template #source>

```vue
<template>
  <cc-tabs v-model="activeName" type="card">
    <cc-tab-pane label="User" name="first">User Content</cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
  </cc-tabs>
</template>
```

 </template>
</demo>

## 自定义标签页的内容

<demo>
 <cc-tabs v-model="activeName">
    <cc-tab-pane label="User" name="first">
      <template #label>
        <span class="custom-tabs-label">
          <cc-icon>
            <CalendarOutlined />
          </cc-icon>
          <span>User Content</span>
        </span>
      </template>
      User Content
    </cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
 </cc-tabs>

<template #source>

```vue
<template>
  <cc-tabs v-model="activeName">
    <cc-tab-pane label="User" name="first">
      <template #label>
        <span class="custom-tabs-label">
          <cc-icon>
            <CalendarOutlined />
          </cc-icon>
          <span>User Content</span>
        </span>
      </template>
    </cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
  </cc-tabs>
</template>
```

 </template>
</demo>

## 自定义增加标签页触发器

<demo>
  <div style="margin-bottom: 20px">
    <cc-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </cc-button>
  </div>
  <cc-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <cc-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </cc-tab-pane>
  </cc-tabs>

<template #source>

```vue
<template>
  <div style="margin-bottom: 20px">
    <cc-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </cc-button>
  </div>
  <cc-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <cc-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </cc-tab-pane>
  </cc-tabs>
</template>
```

</template>
</demo>

## Tabs 属性

| 属性     | 说明                      | 类型             | 默认值           |
| :------- | :------------------------ | :--------------- | :--------------- |
| v-model  | 绑定值，选中选项卡的 name | string \| number | -                |
| type     | 风格类型                  | string           | card/border-card |
| closable | 标签是否可关闭            | boolean          | false            |

## Tabs 事件

| 事件名     | 说明                    | 回调参数                           |
| :--------- | :---------------------- | :--------------------------------- |
| tab-click  | tab 被选中时触发        | (pane: TabsPaneContext, ev: Event) |
| tab-change | `activeName` 改变时触发 | (name: TabPanelName)               |
| tab-remove | 点击 tab 移除按钮时触发 | (name: TabPanelName)               |

## Tabs 插槽

| 插槽名  | 说明         | 子标签   |
| :------ | :----------- | :------- |
| default | 默认插槽内容 | Tab-Pane |

## Tab-pane 属性

| 属性     | 说明                                              | 类型             | 默认值 |
| :------- | :------------------------------------------------ | :--------------- | :----- |
| label    | 选项卡标题                                        | string           | -      |
| disabled | 是否禁用                                          | boolean          | false  |
| name     | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string \| number | 必填   |
| closable | 标签是否可关闭                                    | boolean          | false  |

## Tab-pane 插槽

| 插槽名  | 说明                |
| :------ | :------------------ |
| default | Tab-pane 的内容     |
| label   | Tab-pane 的标题内容 |

</ClientOnly>
