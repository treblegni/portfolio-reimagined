<template>
<Nav
  v-if="navigationStore.homeVisited"
  class="px-10 fixed z-10 top-0 left-0 w-full">
</Nav>
<div class="flex justify-center px-10">
  <div class="max-w-screen-lg">
    <router-view></router-view>
  </div>
</div>
<div v-if="navigationStore.homeVisited">Footer</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigationStore } from './stores/navigation-store'
import { mobileStateHandler } from './utils/helper-functions'
import Nav from './components/Nav.vue'

onMounted(() : void => {
  //attaches handler that watches for screen size change
  mobileStateHandler()
})
</script>