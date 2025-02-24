<template>
  <div class="max-w-screen-xl m-auto">
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped></style>
