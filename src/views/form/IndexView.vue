<template>
  <MyPanel>
    <template #header> 概率触发事件 </template>
    <template #desc>自定义概率触发事件</template>
    <RandomEvent></RandomEvent>
  </MyPanel>
</template>

<script setup>
import RandomEvent from './components/RandomEvent.vue'
import MyPanel from '@/components/MyPanel.vue'
</script>

<style scoped></style>
