<template>
<div id="intro" :class="section">
  <Introduction></Introduction>
</div>
<div v-show="navigationStore.homeVisited" id="about" :class="section">
  <AboutMe></AboutMe>
</div>
<div v-show="navigationStore.homeVisited" id="experience" :class="section">
  <Experience></Experience>
</div>
<div v-show="navigationStore.homeVisited" id="contact" :class="section">
  <Contact></Contact>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import Introduction from '../components/Introduction.vue'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Experience from '../components/Experience.vue'

const section = computed(() => ({
  'section': true,
  'flex justify-center items-center w-full p-10 min-h-screen': true
}))
</script>
