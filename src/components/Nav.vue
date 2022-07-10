<template>
<nav class="flex justify-between items-center h-20">
  <SVGRenderer 
    :svg-string="svgString"
    class="h-10"></SVGRenderer>
  <div class="grid grid-cols-3">
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

<script lang="ts">
import svgString from '../assets/logo-name.svg?raw'
import SVGRenderer from './SVGRenderer.vue';

export default {
  components: {
    SVGRenderer
  },
  data: () => ({
    svgString
  }),
  computer: {
    navButton: () => ({
      'tab hover:text-green-slime': true
    })
  }
}
</script>
