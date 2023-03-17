<script setup>
import { useChat , useAuth } from '../firebase'
import Message from '../components/Message.vue'
import { reactive , ref } from 'vue'

const{user}=useAuth()
const{messages,sendMessage}=useChat()

const listMessages = reactive(messages)
const newMessage = ref('')

function sendNewMessage(){
  sendMessage(newMessage.value)
  newMessage.value=''
}
</script>

<template>
 <div class="bg-slate-800 w-full h-[calc(100%-80px)] flex flex-col justify-between">

    <div class="messages-container overflow-y-scroll flex flex-col-reverse">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId, createdAt } in listMessages"
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

    
      <form @submit.prevent="sendNewMessage" class="send-container flex max-h-[150px] px-3 py-2">
      <input v-model="newMessage" class="p-2 font-mono text-xs outline-emerald-700 focus:outline-double text-white grow resize-none bg-slate-900 rounded-md" placeholder="Message" maxlength="255"/>
      <button type="submit" >
        <svg
          class="icon-send text-emerald-600 hover:text-emerald-900 w-[40px] px-2 duration-200"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
      </button>
    </form>
  
 </div>

</template>

<style scoped>
.messages-container::-webkit-scrollbar {
    width: 10px;
}
.messages-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.62);
    border-radius: 6px;
}
</style>