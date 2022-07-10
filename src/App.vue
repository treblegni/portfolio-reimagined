<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { computed,onMounted } from 'vue'

onMounted(() => {
  
})

const mobileStateHandler = () => {
  
}

const test = computed(() =>({
  'bg-red-200 text-lg': true
}))
</script>

<template>
<router></router>
</template>

<style>
#app {
  /* font-family: 'Source Code Pro','Inter' monospace, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
