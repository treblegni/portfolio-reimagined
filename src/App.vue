<template>
<Navigation
  v-if="navigationStore.homeVisited"
  class="px-10 absolute z-10 top-0 left-0 w-full">
</Navigation>
<div class="flex justify-center px-10">
  <div class="max-w-screen-lg w-full">
    <router-view></router-view>
  </div>
</div>
<Footer v-if="navigationStore.homeVisited"></Footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigationStore } from './stores/navigation-store'
import { mobileStateHandler } from './utils/helper-functions'
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

onMounted(() : void => {
  //attaches handler that watches for screen size change
  mobileStateHandler()
})
</script>