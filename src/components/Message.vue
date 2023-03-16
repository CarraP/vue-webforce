<template>
    <div class="flex flex-col gap-2 my-2 px-4">
      <span class="capitalize text-white text-xs font-mono" v-if="!sender">{{ name }}</span>
      <div class="flex rounded gap-3" :class="sender ? 'flex-row-reverse' : ''">
        <Avatar class="h-10 rounded-full" :src="photoUrl" />
        <div class="font-mono drop-shadow-lg rounded-3xl text-xs min-h-16 px-6 py-3 text-white" :class="sender ? 'bg-emerald-700' : 'bg-gray-700'">
            <p class="text-xs text-gray-400">{{ createdAt }}</p>
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Avatar from './Avatar.vue'
  export default {
    components: { Avatar },
    props: {
      name: { type: String, default: '' },
      photoUrl: { type: String, default: '' },
      sender: { type: Boolean, default: false },
      createdAt: { type: String, default: ''}
    }
}

  </script>
  