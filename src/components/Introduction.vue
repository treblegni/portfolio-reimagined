<template>
<div class="grid grid-flow-row gap-8 w-full">
  <div class="grid grid-flow-row gap-8">
    <p class="sub-title">Hello! My Name's</p>
    <p class="main-title text-green-slime">Ingelbert Figueroa</p>
    <p class="tab">Jr. Web Developer and UI/UX Enthusiast</p>
  </div>
  <div class="relative">
    <transition>
      <button
        v-show="!navigationStore.homeVisited"
        class="absolute z-10 action-button hover:border-green-slime hover:text-green-slime top-0 duration-100"
        @click="navigationStore.updateHomeVisited">Learn More</button>
    </transition>
    <p :class="instructions">
      <span class="text-green-slime">Scroll</span> Down or Use the <span class="text-green-slime">Navigation</span>
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {navigationStore} from '../stores/navigation-store'

const instructions = computed(() =>({
  'transition-opacity duration-500': true,
  'opacity-100': navigationStore.homeVisited,
  'opacity-0': !navigationStore.homeVisited,
  'action-button-text': true
}))
</script>

<style>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>