<template>
  <div class="max-w-screen-xl m-auto p-6">
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped></style>
