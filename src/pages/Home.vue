<script setup>
  import Chat from '@/components/Chat.vue'
  import NotLoggin from '@/components/NotLoggin.vue'
  import {useAuth} from '../firebase'

  const {isLogin} = useAuth();


</script>

<template>
  <Chat v-if="isLogin" class="grow"/>
  <NotLoggin v-else/>
</template>

<style scoped>
</style>
