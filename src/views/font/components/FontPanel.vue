<template>
  <div class="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xl space-y-4">
    <div class="text-2xl font-bold">{{ title }}</div>
    <div>
      <slot name="cn"></slot>
    </div>
    <div>
      <slot name="en"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
})
</script>

<style scoped></style>
