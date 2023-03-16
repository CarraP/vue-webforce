<script setup>

</script>

<template>
 <div class="bg-slate-800 w-full h-[calc(100%-80px)] flex relative">
  <div class="absolute top-40 right-56 pl-6">
    <h1 class="text-white text-[3vw] bg-emerald-500 rounded-xl p-6 font-bold">CONNECTEZ VOUS POUR ACCEDER AU CHAT</h1>
    <svg class="absolute top-[-150px] right-[-180px]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;" xml:space="preserve">
      <path stroke-linecap="round" stroke-linejoin="round" class="st0 draw-arrow" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
      <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-1" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
      <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-2" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
    </svg>
  </div>
 </div>
</template>

<style scoped>
svg {
transform: rotate(230deg);
width: 200px;
height: 200px;
margin: 0 auto;
}

svg .draw-arrow {
  stroke-width: 5;
  stroke: rgb(16 185 129);
  fill: none;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation-duration: 5.0s;
  animation-fill-mode: forwards;
  animation-name: draw;
  }

  svg .draw-arrow.tail-1 {
  animation-delay: 0.9s;
  }

  svg .draw-arrow.tail-2 {
  animation-delay: 1.4s;
  }

  @keyframes draw {
  to {
  stroke-dashoffset: 0;
  }
  }
</style>