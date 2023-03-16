<template>
    <img class="avatar" :src="src" />
</template>   

<script>
    export default {
        props: { src: {typr: String, default: ''} }
    }
</script>