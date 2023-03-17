<template>
    <div class="flex flex-col items-center gap-8 bg-slate-800 h-[calc(100%-80px)] pb-20">

        <p class="text-2xl font-bold pt-10 text-white font-mono">Bonjour {{ user.displayName }} !</p>
    
        <p class="font-medium text-xl text-white font-mono mb-4">Vous avez envoyé {{ filteredMessage.length }} messages</p>
        
           
        <select class="mb-4 bg-slate-900 border-none text-white focus:outline-none px-3 py-1 font-mono" v-model="timeChosen">
            <option :value="all">Tous</option>
            <option value="10">Dans les dix dernières minutes</option>
            <option value="60">Dans la dernière heure</option>
            <option value="1440">Dans les dernières vingt-quatre heures</option>
        </select>
        <p class="font-medium text-2xl text-white font-mono mb-4 text-center">Historique des messages : </p>
            <div class="overflow-y-scroll messages-container flex flex-col">
                 <Message
                    v-for="{ id, text, userPhotoURL, userName, userId, createdAt } in filteredTime"
                    :key="id"
                    :createdAt="new Date(createdAt?.seconds * 1000).toLocaleString('fr')"
                    :name="userName"
                    :photoUrl="userPhotoURL"
                    :sender="userId === user?.uid"
                    :text="text"
                    :docId="id"
                >
                    {{ text }}
                </Message>
            </div>
    </div>
</template>


<script setup>
import { useAuth, useChat } from '../firebase';
import Avatar from '@/components/Avatar.vue';
import Message from '@/components/Message.vue';
import { reactive, ref, computed } from 'vue';

const {user} = useAuth()
const {messages} = useChat()
const listMessages = reactive(messages)
const userTest = reactive(user)
const all = (Date.now()/1000/60)
const timeChosen = ref(all)

const filteredMessage = computed(() =>{
    return listMessages.value.filter((message) =>{
        return message.userId === userTest.value.uid
    })
})

const filteredTime = computed(() =>{
    return filteredMessage.value.filter((message) => {
        return message.createdAt.seconds>((Date.now()/1000)-(timeChosen.value*60))
    })
})


</script>


<style scoped>
.messages-container::-webkit-scrollbar {
    width: 10px;
}
.messages-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.62);
    border-radius: 6px;
}
</style>
