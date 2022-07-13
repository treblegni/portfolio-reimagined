<template>
<div class="flex flex-col items-center h-full">
  <div id="intro" :class="introduction">
    <Introduction></Introduction>
  </div>
  <div v-if="navigationStore.homeVisited" id="about" class="flex justify-center items-center h-screen w-full">
    <AboutMe></AboutMe>
  </div>
  <div v-if="navigationStore.homeVisited" id="contact" class="flex justify-center items-center h-screen w-full">
    <Contact></Contact>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import Introduction from '../components/Introduction.vue'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'

const introduction = computed(() => ({
  // 'absolute w-screen bg-black px-11': !navigationStore.homeVisited,
  'flex justify-center items-center h-screen w-full': true
}))
</script>
