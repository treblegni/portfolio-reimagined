<template>
<div class="grid grid-flow-row gap-8 text-center w-full">
  <div class="grid grid-flow-row gap-8">
    <div class="flex flex-col items-center relative">
      <p class="sub-title mb-2">Message Me For</p>
      <p class="secondary-title text-green-slime bg-green-gray-dark px-4">Opportunities<br v-if="navigationStore.isMobile">{{!navigationStore.isMobile ? '/': ''}}Feedback</p>
      <div :class="headerBorder"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text max-w-sm ml-auto mr-auto">I’m currently looking for opportunities<br>to advanced in my career. Send me a message if you are interested in my wor or feel free to provide feedback.<br>Any messages or feedback are appreciated.</p>
    </div>
  </div>
  <div class="flex justify-center">
    <button class="action-button hover:border-green-slime hover:text-green-slime">Message Me</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {navigationStore} from '../stores/navigation-store'

const headerBorder = computed(() => ({
  'top-9': !navigationStore.isMobile,
  'top-12': navigationStore.isMobile,
  'absolute border-b-2 border-green-gray-regular w-full -z-10': true
}))
</script>
