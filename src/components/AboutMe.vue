<template>
<div class="grid grid-flow-row gap-8 text-center">
  <div class="grid grid-flow-row gap-8">
    <div class="grid grid-flow-row gap-2 relative">
      <p class="sub-title">Learn</p>
      <p class="secondary-title text-green-slime">About Me</p>
      <!-- <div clas="absolute border-t-2 border-green-gray-medium w-full"></div> -->
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text max-w-sm ml-auto mr-auto">I’m a Computer Science graduate<br> working for a consulting firm that speciallizes in developing solutions for clients that help them manage their digital content.</p>
      <p class="content-text max-w-sm ml-auto mr-auto">My focus is in creating Frontend implementations<br> that incorporate best practices and modern technologies to deliver meaningful and engaging web experiences that are easy to navigate.</p>
    </div>
  </div>
  <div>
    <div class="grid grid-flow-row gap-4 relative">
      <p class="sub-title">My Tool Belt</p>
      <div clas="absolute border-t-2 border-green-gray-medium w-full"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text">I’ve used many tools and technologies to develop web applications. Here are some I currently focus on:</p>
      <div>
        icons
      </div>
    </div>
  </div>
  <!-- <div>
    <button
      v-if="!navigationStore.homeVisited"
      class="action-button hover:border-green-slime hover:text-green-slime"
      @click="navigationStore.updateHomeVisited">Learn More</button>
    <p
      v-if="navigationStore.homeVisited" 
      class="action-button-text">
      <span class="text-green-slime">Scroll</span> Down or Use the <span class="text-green-slime">Navigation</span>
    </p>
  </div> -->
</div>
</template>

<script setup lang="ts">
import {navigationStore} from '../stores/navigation-store'
</script>
