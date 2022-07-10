<template>
<div class="grid grid-flow-row gap-8">
  <div class="grid grid-flow-row gap-8">
    <p class="title-bold text-md leading-3">Hello! My Name's</p>
    <p class="title-bolder text-6xl text-green-slime leading-10">Ingelbert Figueroa</p>
    <p class="title-semibold text-sm leading-3">Jr. Web Developer and UI/UX Enthusiast</p>
  </div>
  <div>
    <button class="title-bold text-xs border-2 hover:border-green-slime p-4 rounded-lg hover:text-green-slime">Learn More</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed,onMounted } from 'vue'

const nav = computed(() =>({
  'flex justify-between items-center h-20': true
}))

const navButton = computed(() => ({
  'title-bold hover:text-green-slime': true
}))

const navButtonContainer = computed(() =>({
  'grid grid-cols-3': true
}))
</script>
