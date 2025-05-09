<template>
  <MyPanel>
    <template #header> 图片 </template>
    <template #desc
      >图片滚动穿透文字效果，示例来源：<a
        class="hover:underline hover:text-blue-500 transition-colors"
        href="https://gsap.com/"
        target="_blank"
        >GSAP</a
      ></template
    >
    <OverlayBox />
  </MyPanel>
</template>

<script setup>
import MyPanel from "@/components/MyPanel.vue"
import OverlayBox from "./components/OverlayBox.vue"
</script>

<style scoped></style>
