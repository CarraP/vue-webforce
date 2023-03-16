<template>
  <nav>
    <div class="flex justify-between px-10 h-[80px] bg-slate-900 text-white">

      <router-link to="/" class="flex">
        <img src="../assets/img/logo.jpg" alt="logo">
        <h1 class="font-bold p-6">Vue Application</h1>
      </router-link>

      <div v-if="isLogin" class="login flex">
        <router-link to="/account"><Avatar :src="user.photoURL" class="w-[60px] h-[60px] rounded-xl m-2.5" /></router-link>
        <button class="bg-green-500 hover:bg-green-600 h-[40px] w-[120px] m-5 rounded-xl" @click="signOut">Déconnexion</button>
      </div>   

      <button v-else class="bg-green-500 hover:bg-green-600 h-[40px] w-[120px] m-5 rounded-xl" @click="signIn">Connexion</button>
      
    </div>
  </nav>
</template>


<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'

export default {
  components:{ Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>