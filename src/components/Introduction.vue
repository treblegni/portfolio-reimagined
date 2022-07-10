<template>
<div class="grid grid-flow-row gap-8">
  <div class="grid grid-flow-row gap-8">
    <p class="sub-title">Hello! My Name's</p>
    <p class="main-title text-green-slime">Ingelbert Figueroa</p>
    <p class="tab">Jr. Web Developer and UI/UX Enthusiast</p>
  </div>
  <div>
    <button
      v-if="!navigationStore.homeVisited"
      class="action-button hover:border-green-slime hover:text-green-slime"
      @click="navigationStore.updateHomeVisited">Learn More</button>
    <p
      v-if="navigationStore.homeVisited" 
      class="action-button-text">
      <span class="text-green-slime">Scroll</span> Down or Use the <span class="text-green-slime">Navigation</span>
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
import {navigationStore} from '../stores/navigation-store'
</script>
