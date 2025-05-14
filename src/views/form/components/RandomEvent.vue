<template>
  <div class="space-y-4 w-1/2">
    <el-form :form="form" inline>
      <el-form-item label="触发概率">
        <el-input-number v-model="form.probability" :precision="2" :step="0.1" :max="100">
          <template #suffix>%</template>
        </el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleEvent(form.probability)">点击</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
    <template v-if="data.messages.length > 0">
      <div>实际触发概率：{{ successProbability }}%</div>
      <div class="bg-white p-3 h-80">
        <el-scrollbar ref="scrollbar">
          <ul ref="container" class="space-y-3">
            <li
              v-for="(item, key) in data.messages"
              :key="key"
              :class="item.isSuccess ? 'text-green-700' : 'text-zinc-900'"
            >
              {{ item.message }}
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </template>
  </div>
</template>

<script setup>
import { reactive, ref, nextTick, computed } from "vue"
import Decimal from "decimal.js"

const data = reactive({ messages: [] })
const container = ref(null)
const scrollbar = ref(null)
const form = reactive({
  probability: 30,
})

const successCount = computed(() => {
  return data.messages.filter((item) => item.isSuccess).length
})

const successProbability = computed(() => {
  if (data.messages.length === 0) {
    return 0
  }
  return new Decimal(successCount.value)
    .dividedBy(data.messages.length)
    .times(100)
    .toDecimalPlaces(2)
    .toNumber()
})
// 事件触发函数
const shouldTriggerEvent = (probability) => {
  const randomValue = Math.random() // 生成0到1之间的随机数
  return randomValue < probability
}

// 触发事件的具体逻辑
const triggerEvent = () => {
  data.messages.push({
    message: "事件触发",
    isSuccess: true,
  })
}

// 主逻辑
const handleEvent = (probability) => {
  if (shouldTriggerEvent(probability / 100)) {
    triggerEvent() // 如果满足概率条件，触发事件
  } else {
    data.messages.push({
      message: "事件未触发",
      isSuccess: false,
    })
  }
  // 获取容器并滚动到底部
  nextTick(() => {
    scrollbar.value.setScrollTop(container.value.scrollHeight)
  })
}

const handleReset = () => {
  data.messages = []
  form.probability = 30
}
</script>

<style scoped></style>
