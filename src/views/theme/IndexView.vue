<template>
  <MyPanel>
    <template #header>element-plus 主题展示</template>
    <template #desc>展示了各种组件的不同类型样式</template>
    <TypeDisplay></TypeDisplay>
  </MyPanel>
</template>

<script setup>
import MyPanel from "@/components/MyPanel.vue"
import TypeDisplay from "./components/TypeDisplay.vue"
</script>

<style scoped></style>
