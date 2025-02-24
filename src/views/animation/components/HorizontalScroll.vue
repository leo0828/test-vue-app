<template>
  <div
    ref="container"
    class="overflow-hidden cursor-grab active:cursor-grabbing"
    @mouseenter="pauseScroll"
    @mouseleave="resumeScroll"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
  >
    <div class="flex space-x-4 flex-nowrap">
      <div
        v-for="i in 20"
        :key="i"
        class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center flex-none"
      >
        Item {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollStep: 2, // 滚动步长
      isScrolling: true, // 是否处于自动滚动状态
      isDragging: false, // 是否正在拖动
      startX: 0, // 鼠标按下时的 X 坐标
      scrollLeftAtDragStart: 0, // 拖动开始时的 scrollLeft
    }
  },
  mounted() {
    // 获取容器 DOM
    this.container = this.$refs.container

    // 开始自动滚动
    this.animateScroll()
  },
  methods: {
    // 停止自动滚动
    pauseScroll() {
      this.isScrolling = false
    },
    // 恢复自动滚动
    resumeScroll() {
      this.isScrolling = true
      this.animateScroll() // 恢复时再次启动滚动
    },
    // 鼠标按下开始拖动
    startDrag(event) {
      this.isDragging = true
      this.startX = event.clientX
      this.scrollLeftAtDragStart = this.container.scrollLeft
    },
    // 鼠标移动时进行拖动滚动
    onDrag(event) {
      if (this.isDragging) {
        const distance = event.clientX - this.startX
        this.container.scrollLeft = this.scrollLeftAtDragStart - distance
      }
    },
    // 鼠标松开停止拖动
    stopDrag() {
      this.isDragging = false
    },
    // 自动滚动的方法
    animateScroll() {
      if (!this.isScrolling) return // 如果不在自动滚动状态，则停止滚动

      const scroll = () => {
        // 如果停止滚动，则不执行动画
        if (!this.isScrolling) return

        // 获取当前的 scrollLeft
        let currentScrollLeft = this.container.scrollLeft

        const scrollWidth = this.container.scrollWidth
        const clientWidth = this.container.clientWidth

        // 更新 scrollLeft
        currentScrollLeft += this.scrollStep

        // 检查是否到了滚动边界
        if (currentScrollLeft + clientWidth >= scrollWidth || currentScrollLeft <= 0) {
          this.scrollStep = -this.scrollStep // 到达边界后反向滚动
        }

        // 设置容器的 scrollLeft 以实现滚动
        this.container.scrollLeft = currentScrollLeft

        // 使用 requestAnimationFrame 确保平滑滚动
        requestAnimationFrame(scroll)
      }

      // 启动滚动
      scroll()
    },
  },
}
</script>

<style scoped></style>
