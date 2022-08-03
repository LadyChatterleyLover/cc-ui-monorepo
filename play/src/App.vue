<template>
  <h1>cc-ui</h1>
  <div>
    <cc-icon :size="40">
      <AccountBookOutlined />
    </cc-icon>
  </div>
  <div style="display: flex">
    <div style="margin-right: 10px"><cc-button>default</cc-button></div>
    <div style="margin-right: 10px">
      <cc-button type="primary">primary</cc-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AccountBookOutlined } from '@vicons/antd'
</script>

<style></style>
