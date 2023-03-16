<script setup>
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div class="wrapper w-screen h-screen flex flex-col">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
