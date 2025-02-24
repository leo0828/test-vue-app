<template>
  <MyPanel>
    <template #header>横向滚动</template>
    <template #desc>横向滚动动画，鼠标移入停止动画，鼠标移出继续动画，鼠标拖动跟随滚动</template>
    <HorizontalScroll></HorizontalScroll>
  </MyPanel>
</template>

<script setup>
import HorizontalScroll from './components/HorizontalScroll.vue'
import MyPanel from '@/components/MyPanel.vue'
</script>

<style scoped></style>
