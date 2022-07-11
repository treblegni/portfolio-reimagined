<template>
<div class="grid grid-flow-row gap-8 text-center">
  <div class="grid grid-flow-row gap-8">
    <div class="grid grid-flow-row gap-2 relative">
      <p class="sub-title">Message Me For</p>
      <p class="secondary-title text-green-slime">Opportunities/Feedback</p>
      <!-- <div clas="absolute border-t-2 border-green-gray-medium w-full"></div> -->
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
import {navigationStore} from '../stores/navigation-store'
</script>
