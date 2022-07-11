<template>
<div class="grid grid-flow-row gap-8 w-full">
  <div class="grid grid-flow-row gap-8">
    <p class="sub-title">Hello! My Name's</p>
    <p class="main-title text-green-slime">Ingelbert Figueroa</p>
    <p class="tab">Jr. Web Developer and UI/UX Enthusiast</p>
  </div>
  <div class="relative">
    <button
      v-show="!navigationStore.homeVisited"
      class="absolute z-10 action-button hover:border-green-slime hover:text-green-slime top-0"
      @click="navigationStore.updateHomeVisited">Learn More</button>
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
  'opacity-100': navigationStore.homeVisited,
  'opacity-0': !navigationStore.homeVisited,
  'action-button-text': true
}))
</script>
