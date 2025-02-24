<template>
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>

<script>
import echarts from '@/plugins/global-echarts'
import { shallowRef } from 'vue'

export default {
  name: 'ObserverEcharts',
  props: {
    option: Object,
  },
  data() {
    return {
      resizeObserver: null, // ResizeObserver 实例
    }
  },
  setup() {
    const chartInstance = shallowRef(null) // ECharts 实例
    return {
      chartInstance,
    }
  },
  mounted() {
    // 初始化 ECharts 实例
    this.chartInstance = echarts.init(this.$refs.chartContainer)
    // 为ECharts添加数据
    this.chartInstance.setOption(this.option)

    // 创建 ResizeObserver 监听容器大小变化
    this.resizeObserver = new ResizeObserver(() => {
      if (this.chartInstance) {
        this.chartInstance.resize()
      }
    })
    this.resizeObserver.observe(this.$refs.chartContainer)
  },
  beforeUnmount() {
    // 销毁 ECharts 实例
    if (this.chartInstance) {
      this.chartInstance.dispose()
      this.chartInstance = null
    }

    // 停止监听并清理 ResizeObserver
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  },
}
</script>

<style></style>
