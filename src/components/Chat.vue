<script>
export default{
  data(){
    return{
      messages:[
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùldsds qklm qdmldsqùmdlsqùldsq ùmqldsmùldsds qklm qdmldsqùmdlsqùldsq ùmqldsmùldsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
        {text:"dsds qklm qdmldsqùmdlsqùldsq ùmqldsmùl"},
      ]
    }
  }
}
</script>

<template>
 <div class="bg-red-800 w-full h-[90%] flex flex-col">

    <div class="messages-container overflow-y-scroll flex flex-col-reverse">
      <div v-for="message in messages">{{ message.text }}</div>
    </div>

    <div class="send-container flex">
      <textarea class=" grow resize-none" placeholder="Message" maxlength="255"></textarea>
      <button>
        <img class="w-[50px] mx-3" src="../../public/icons8-send-96.png" alt="logo envoyer">
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
