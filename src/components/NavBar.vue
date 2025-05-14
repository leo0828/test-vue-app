<template>
  <nav
    class="fixed left-0 right-0 top-0 h-20 flex items-center z-50 transition duration-300 px-5 bg-white/80 backdrop-blur-sm"
  >
    <ul class="flex items-center gap-4 text-lg">
      <li v-for="route in routes" :key="route.name">
        <router-link
          class="px-3 py-1 rounded transition"
          :class="
            activeRoute === route.name
              ? 'bg-zinc-900 text-white hover:bg-zinc-700'
              : 'bg-transparent hover:bg-zinc-100'
          "
          :to="route.path"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    routes() {
      // 获取所有的路由
      return this.$router.options.routes
    },
    activeRoute() {
      // 获取当前路由
      return this.$route.name
    },
  },
}
</script>

<style scoped></style>
