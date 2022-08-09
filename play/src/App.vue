<template>
  <div>
    <cc-tabs v-model="activeName" @tab-click="handleClick">
      <cc-tab-pane label="User" name="first">User Content</cc-tab-pane>
      <cc-tab-pane label="Config" name="second">Config Content</cc-tab-pane>
      <cc-tab-pane label="Role" name="third">Role Content</cc-tab-pane>
      <cc-tab-pane label="Task" name="fourth">Task Content</cc-tab-pane>
    </cc-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref('first')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped></style>
