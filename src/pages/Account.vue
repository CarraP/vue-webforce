<template>
    <div class="flex flex-col items-center gap-8 bg-slate-800 h-[calc(100%-80px)] pb-20">
        <p class="text-3xl font-bold pt-10">Bonjour {{ user.displayName }} !</p>
        
        <Avatar class="w-40 rounded-full" :src="user.photoURL"/>

        <p class="font-medium text-2xl">Historique des messages :</p>


        <div class="overflow-y-scroll messages-container">
            <Message
                v-for="{ id, text, userPhotoURL, userName, userId, createdAt } in filteredMessage"
                :key="id"
                :createdAt="new Date(createdAt?.seconds * 1000).toLocaleString('fr')"
                :name="userName"
                :photoUrl="userPhotoURL"
                :sender="userId === user?.uid"
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
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';

const {user} = useAuth()
const {messages} = useChat()
const listMessages = reactive(messages)
const userTest = reactive(user)
const filteredMessage = computed(() =>{
    return listMessages.value.filter((message) =>{
        return message.userId === userTest.value.uid
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
