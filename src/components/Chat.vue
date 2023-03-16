<script setup>
import { reactive , ref } from 'vue'
import { useChat , useAuth } from '../firebase'
import Message from '../components/Message.vue'

const{user}=useAuth()
const{messages,sendMessage}=useChat()

const newMessage = ref('')
const listMessages = reactive(messages)

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
        :createdAt="createdAt"
        :name="userName"
        :photoUrl="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
    </div>

    <div class="send-container flex h-[400px]">
      <textarea v-model="newMessage" class="grow resize-none" placeholder="Message" maxlength="255"></textarea>
      <button @click="sendNewMessage">
        <svg
          class="icon-send text-green-500 hover:text-green-600 w-[50px] px-2"
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
    </div>

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