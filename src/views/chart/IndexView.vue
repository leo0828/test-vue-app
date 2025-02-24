<template>
  <MyPanel>
    <template #header>响应式图表</template>
    <template #desc>宽度自适应的图表</template>
    <ObserverChart></ObserverChart>
  </MyPanel>
</template>

<script setup>
import ObserverChart from './components/ObserverChart.vue'
import MyPanel from '@/components/MyPanel.vue'
</script>

<style scoped></style>
