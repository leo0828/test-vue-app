<template>
  <MyPanel>
    <template #header> web字体 </template>
    <template #desc> 列举了{{ data.fonts.length }}种中文web字体 </template>
    <main class="grid grid-cols-2 gap-6 max-w-7xl m-auto min-h-screen">
      <FontPanel
        v-for="font in data.fonts"
        :key="font.name"
        :title="font.name"
        :class="font.className"
      >
        <template #cn>{{ font.cn }}</template>
        <template #en>{{ font.en }}</template>
      </FontPanel>
    </main>
  </MyPanel>
</template>

<script setup>
import { reactive } from "vue"
import { fonts } from "@/constants/fonts"
import MyPanel from "@/components/MyPanel.vue"
import FontPanel from "./components/FontPanel.vue"
const data = reactive({ fonts })
</script>

<style scoped></style>
