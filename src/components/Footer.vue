<template>
<div class="flex flex-col items-center py-8">
  <div class="grid grid-flow-row gap-2 relative mb-2">
    <p :class="footer">Designed & Built<br v-if="navigationStore.isMobile"> by <br v-if="navigationStore.isMobile"><span class="sub-title text-green-slime">Ingelbert Figueroa</span></p>
  </div>
  <div class="grid grid-flow-col gap-4">
    <div class="flex items-center">
      <SVGRenderer
        :svg-string="eyeSVGString"
        class="social-icon h-6 w-auto"></SVGRenderer>
      <span class="tab">Watch Count</span>
    </div>
    <div class="flex items-center">
      <SVGRenderer
        :svg-string="starSVGString"
        class="social-icon h-6 w-auto"></SVGRenderer>
      <span class="tab">Star count</span>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import SVGRenderer from './SVGRenderer.vue'
import eyeSVGString from '../assets/iconmonstr-eye-lined.svg?raw'
import starSVGString from '../assets/iconmonstr-star-lined.svg?raw'

const footer = computed(() => ({
  'text-center': navigationStore.isMobile,
  'tab': true
}))
</script>
