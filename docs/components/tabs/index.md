# Tabs 标签页

<script setup>
  import { ref } from 'vue'
  import { CalendarOutlined } from '@vicons/antd'

  const activeName = ref('first')

  const handleClick = (tab, event) => {
    console.log(tab, event)
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
      title: 'New Tab',
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
  console.log(editableTabs.value)
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
  <cc-tabs v-model="activeName" @tab-click="handleClick">
    <cc-tab-pane label="User" name="first">User</cc-tab-pane>
    <cc-tab-pane label="Config" name="second">Config</cc-tab-pane>
    <cc-tab-pane label="Role" name="third">Role</cc-tab-pane>
    <cc-tab-pane label="Task" name="fourth">Task</cc-tab-pane>
  </cc-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
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
