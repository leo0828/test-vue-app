<template>
  <nav
    class="fixed left-0 right-0 top-0 h-20 flex items-center justify-between z-50 transition duration-300 px-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm"
  >
    <ul class="flex items-center gap-4 text-lg">
      <li v-for="route in routes" :key="route.name">
        <router-link
          class="px-3 py-1 rounded transition"
          :class="
            activeRoute === route.name
              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300'
              : 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-600'
          "
          :to="route.path"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
    <DarkModeToggle />
  </nav>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import DarkModeToggle from "./DarkModeToggle.vue"

const route = useRoute()
const router = useRouter()

const routes = computed(() => router.options.routes)
const activeRoute = computed(() => route.name)
</script>

<style scoped></style>
