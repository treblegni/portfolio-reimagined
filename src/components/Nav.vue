<template>
<nav class="flex justify-between items-center h-20">
  <SVGRenderer 
    :svg-string="svgString"
    class="h-10"></SVGRenderer>
  <div class="grid grid-flow-col gap-8 items-center">
    <a href="#about" :class="navButton">
      About
    </a>
    <!-- <button :class="navButton">
      Experience
    </button> -->
    <a href="#contact" class="action-button hover:text-green-slime hover:border-green-slime">
      Message Me
    </a>
  </div>
</nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import svgString from '../assets/logo-name.svg?raw'
import SVGRenderer from './SVGRenderer.vue';

const navButton = computed(() : object => ({
  'tab hover:text-green-slime': true
}))
</script>
