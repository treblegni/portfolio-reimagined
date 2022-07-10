<template>
<nav :class="nav">
  <SVGRenderer 
    :svg-string="svgString"
    class="h-10"></SVGRenderer>
  <div :class="navButtonContainer">
    <button :class="navButton">
      About
    </button>
    <button :class="navButton">
      Experience
    </button>
    <button :class="navButton">
      Contact
    </button>
  </div>
</nav>
</template>

<script setup lang="ts">
import { computed,onMounted } from 'vue'
import svgString from '../assets/logo-name.svg?raw'
import SVGRenderer from './SVGRenderer.vue';

onMounted(() => {
  
})

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
