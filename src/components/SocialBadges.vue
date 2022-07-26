<template>
<div class="flex">
  <a href="https://www.linkedin.com/in/ingelbert-figueroa-b75299182/" class="mr-4">
    <SVGRenderer
        :svg="linkedin"
        class="h-6 fill-current text-green-gray-regular hover:text-cream transition duration-100">
    </SVGRenderer>
  </a>
  <a href="https://github.com/treblegni">
    <SVGRenderer
        :svg="github"
        class="h-6 fill-current text-green-gray-regular hover:text-cream transition duration-100">
    </SVGRenderer>
  </a>
</div>
</template>

<script setup lang="ts">
import SVGRenderer from './SVGRenderer.vue'
import github from '../assets/github.svg?raw'
import linkedin from '../assets/linkedin.svg?raw'
</script>