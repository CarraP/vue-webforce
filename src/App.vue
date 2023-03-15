<script setup>
import Chat from './components/Chat.vue'
import Nav from '@/components/Nav.vue'
</script>


<template>
    <div class="wrapper w-screen h-screen bg-violet-900 flex flex-col">
      <Nav />
      <Chat class="grow"/>
    </div>
</template>



<style scoped>
</style>
