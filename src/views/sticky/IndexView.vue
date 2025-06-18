<template>
  <MyPanel>
    <template #header>长滚动sticky</template>
    <template #desc>滚动固定左侧标题</template>
    <ScrollSection></ScrollSection>
  </MyPanel>
</template>

<script setup>
import ScrollSection from "./components/ScrollSection.vue"
import MyPanel from "@/components/MyPanel.vue"
</script>

<style scoped></style>
