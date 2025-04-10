<template>
  <div class="bg-white text-gray-600 text-xl p-6 space-y-6">
    <div class="text-2xl">{{ title }}</div>
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
