<template>
  <el-form :form="form" label-position="top" style="max-width: 300px">
    <el-form-item label="触发概率">
      <el-input v-model="form.probability" />
    </el-form-item>
    <el-form-item>
      <el-button @click="handleEvent(form.probability)">概率触发事件</el-button>
    </el-form-item>
  </el-form>
  <el-scrollbar class="w-80" ref="scrollbar" max-height="400px">
    <ul ref="container">
      <li class="my-3" v-for="message in data.messages" :key="message">{{ message }}</li>
    </ul>
  </el-scrollbar>
</template>

<script setup>
import { reactive, ref, nextTick } from 'vue'

const data = reactive({ messages: [] })
const container = ref(null)
const scrollbar = ref(null)
const form = reactive({
  probability: 0.3,
})
// 事件触发函数
const shouldTriggerEvent = (probability) => {
  const randomValue = Math.random() // 生成0到1之间的随机数
  return randomValue < probability
}

// 触发事件的具体逻辑
const triggerEvent = () => {
  data.messages.push('事件触发！')
}

// 主逻辑
const handleEvent = (probability) => {
  if (shouldTriggerEvent(probability)) {
    triggerEvent() // 如果满足概率条件，触发事件
  } else {
    data.messages.push('事件未触发')
  }
  // 获取容器并滚动到底部
  nextTick(() => {
    scrollbar.value.setScrollTop(container.value.scrollHeight)
  })
}
</script>

<style scoped></style>
