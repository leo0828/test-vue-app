<template>
  <div class="space-y-6">
    <MyHeader>
      <slot name="header"></slot>
    </MyHeader>
    <div>
      <slot name="desc"></slot>
    </div>
    <div class="bg-white p-6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue"
</script>

<style scoped></style>
