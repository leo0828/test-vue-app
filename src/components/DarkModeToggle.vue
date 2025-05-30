<template>
  <button
    @click="toggleDark()"
    class="px-4 py-2 rounded bg-white dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 transition duration-300"
  >
    {{ isDark ? "🌞" : "🌙" }}
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
