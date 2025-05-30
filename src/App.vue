<template>
  <div class="max-w-screen-xl m-auto p-6 font-mono transition-colors duration-200">
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"
</script>

<style>
body {
  background-color: #f5f5f5;
}

.dark body {
  background-color: #09090b;
}
</style>
