<template>
<div class="flex flex-col items-center h-full">
  <div id="intro" class="flex justify-center items-center h-screen">
    <Introduction></Introduction>
  </div>
  <div v-if="navigationStore.homeVisited" id="about" class="flex justify-center items-center h-screen">
    <AboutMe></AboutMe>
  </div>
  <div v-if="navigationStore.homeVisited" id="contact" class="flex justify-center items-center h-screen">
    <Contact></Contact>
  </div>
</div>
</template>

<script setup lang="ts">
import { navigationStore } from '../stores/navigation-store';
import Introduction from '../components/Introduction.vue';
import AboutMe from '../components/AboutMe.vue';
import Contact from '../components/Contact.vue';
</script>
