<template>
  <nav>
    <div class="flex justify-between px-10 h-[80px] bg-slate-900 text-white">

      <div class="flex">
        <img src="../assets/img/logo.jpg" alt="logo">
        <h1 class="font-bold p-6">Vue Application</h1>
      </div>
      
      <div v-if="isLogin" class="login">
        <!-- <Avatar :src="user.photoURL" /> -->
        <button class="bg-green-500 hover:bg-green-600 h-[40px] w-[100px] m-5 rounded-xl" @click="signOut">Déconnexion</button>
      </div>   

      <button v-else class="bg-green-500 hover:bg-green-600 h-[40px] w-[100px] m-5 rounded-xl" @click="signIn">Connex</button>
      
    </div>
  </nav>
</template>


<script>
//import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'

export default {
  // components:{ Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>