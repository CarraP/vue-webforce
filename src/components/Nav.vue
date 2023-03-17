<template>
  <nav>
    <div class="flex justify-between px-10 h-[80px] bg-slate-900 text-white">

      <router-link to="/" class="flex items-center">
        <img src="../assets/img/logo.jpg" class="h-14" alt="logo">
        <h1 class="font-bold font-mono invisible sm:visible"> <span class="font-bold text-emerald-600 font-mono">Vue</span> Application</h1>
      </router-link>

      <div v-if="isLogin" class="login flex items-center gap-1">
        <button class=" px-4 py-2 font-mono text-xs rounded-full underline" @click="signOut">Déconnexion</button>
        <router-link to="/account"><Avatar :src="user.photoURL" class="w-14 rounded-xl"/></router-link>
      </div>   

      <button v-else class="m-5" @click="signIn">Connexion</button>
      
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



