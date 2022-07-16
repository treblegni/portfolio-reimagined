<template>
<div class="grid grid-flow-row gap-8 text-center w-full">
  <div class="grid grid-flow-row gap-8">
    <div class="flex flex-col items-center relative">
      <p class="sub-title mb-2">Learn</p>
      <p class="secondary-title text-green-slime bg-green-gray-dark px-4">About Me</p>
      <div class="absolute border-b-2 border-green-gray-regular w-full top-9 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text max-w-sm ml-auto mr-auto">I’m a Computer Science graduate<br> working for a consulting firm that speciallizes in developing solutions for clients that help them manage their digital content.</p>
      <p class="content-text max-w-sm ml-auto mr-auto">My focus is in creating Frontend implementations<br> that incorporate best practices and modern technologies to deliver meaningful and engaging web experiences and are easy to navigate.</p>
    </div>
  </div>
  <div class="grid grid-flow-row gap-8">
    <div class="flex justify-center relative">
      <p class="sub-title bg-green-gray-dark px-4">My Tool Belt</p>
      <div class="absolute border-b-2 border-green-gray-medium w-full top-2 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text">I’ve used many tools and technologies to develop web applications. Here are some I currently focus on:</p>
      <div>
        icons
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {navigationStore} from '../stores/navigation-store'
</script>
