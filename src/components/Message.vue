  <script setup>
    import { reactive, ref, toRefs } from 'vue';
    import Avatar from './Avatar.vue'
    import { useChat, useAuth } from '../firebase';
    const{updateMessage, deleteMessage}=useChat()
    const{user}=useAuth()
    const props= defineProps({
      name: { type: String, default: '' },
      photoUrl: { type: String, default: '' },
      sender: { type: Boolean, default: false },
      createdAt: { type: String, default: ''},
      text:{ type: String, default:''},
      docId:{ type: String, default:''}
    })

    const { text, docId, sender } = toRefs(props)
    const poPupUpdateBool = ref(false)
    const poPupDeleteBool = ref(false)
    const newMessage = ref(text.value)

    function popClose(){
      poPupUpdateBool.value=false
      poPupDeleteBool.value=false
    }
    function updateMyMessage(){
      updateMessage(newMessage.value,docId.value)
      popClose()

    }    
    function deleteMyMessage(){
      deleteMessage(docId.value)
      popClose()

    }
    function popOpenUpdate(){
      newMessage.value=text.value
      poPupUpdateBool.value=true
    }
    function popOpenDelete(){
      newMessage.value=text.value
      poPupDeleteBool.value=true
    }
  </script>
<template>

  <div class="flex flex-col gap-2 my-2 px-4">
    <span class="capitalize text-white text-xs font-mono" v-if="!sender">{{ name }}</span>
    <div class="flex rounded gap-3" :class="sender ? 'flex-row-reverse' : ''">
      <Avatar class="h-10 rounded-full" :src="photoUrl" />
      <div class="message relative font-mono drop-shadow-lg rounded-3xl text-xs min-h-16 px-6 py-3 text-white" :class="sender ? 'bg-emerald-700' : 'bg-gray-700'">
          <p class="text-xs text-gray-400">{{ createdAt }}</p>
        <slot />
        <div v-if="sender" @[sender&&`click`]="popOpenDelete" class="w-[20px] h-[20px] rounded-full bg-slate-900 absolute top-[-13px] right-[19px] flex justify-center items-center text-red-800 font-extrabold cursor-pointer p-3 scale-0">
          ❌
        </div>
        <div v-if="sender" @[sender&&`click`]="popOpenUpdate" class="w-[20px] h-[20px] rounded-full bg-slate-900 absolute top-[-13px] right-[50px] flex justify-center items-center text-red-800 font-extrabold cursor-pointer p-3 scale-0">
          📝
        </div>
      </div>
    </div>
  </div>

  <div v-if="poPupUpdateBool" class="absolute flex items-center justify-center bg-black/70 inset-0 z-10 duration-500">
    <div class="popUP flex flex-col bg-white p-6 rounded-xl justify-between gap-6 font-mono">
      <input class="bg-slate-900 text-white px-4 py-1 rounded-lg w-64 xs:w-96" v-model="newMessage" type="text" maxlength="255">
      <div class="flex justify-around">
        <button @click="updateMyMessage" class="btn1">Valider</button>
        <button @click="popClose" class="btn2">Annuler</button>
      </div>
    </div>
  </div>

  <div v-if="poPupDeleteBool" class="absolute flex items-center justify-center bg-black/70 inset-0 z-10 duration-500">
    <div class="popUP flex flex-col bg-white p-6 rounded-xl justify-between gap-6 font-mono">
      <div class="flex justify-around gap-6">
        <button @click="deleteMyMessage" class="btn2">Supprimer le Message</button>
        <button @click="popClose" class="btn2">Annuler</button>
      </div>
    </div>
  </div>

</template>
  
<style scoped>
button{
  border-bottom:6px white solid
}
.btn1:hover{
  border-bottom:6px rgb(15,23,42) solid}
.btn2:hover{
  border-bottom:6px rgb(185 28 28) solid
}
.message:hover div{
  transform: scale(1);
  }
</style>