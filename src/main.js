import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Account from '@/pages/Account.vue'
import App from './App.vue'
import {useAuth} from './firebase'

import './assets/main.css'

const {isLogin} = useAuth()

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/account', name: 'Account', component: Account}
    ]
})

router.beforeEach((to)=>{
    if(!isLogin.value && to.name!=='Home') return '/'
})

const app = createApp(App)
app.use(router)
app.mount('#app')
