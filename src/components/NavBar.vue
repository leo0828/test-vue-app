<template>
  <nav class="pb-6">
    <ul class="flex items-center gap-4 text-lg">
      <li
        class="hover:underline hover:text-blue-500 transition-colors"
        :class="activeRoute === route.name ? 'underline text-blue-500' : ''"
        v-for="route in routes"
        :key="route.name"
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
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
