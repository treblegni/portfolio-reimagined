<template>
<div class="flex flex-col items-center">
  <div class="grid grid-flow-row gap-2 relative mb-2">
    <span :class="footer">Designed & Built by</span>
    <span class="sub-title text-green-slime">Ingelbert Figueroa</span>
  </div>
  <div class="grid grid-flow-col gap-4">
    <div class="flex items-center">
      <a href="https://github.com/treblegni/portfolio-reimagined">
        <SVGRenderer
          :svg="eyeSVGString"
          class="social-icon h-6 w-auto fill-current text-cream"></SVGRenderer>
      </a>
      <span class="ml-2 tab" v-text="watchCount"></span>
    </div>
    <div class="flex items-center">
      <a href="https://github.com/treblegni/portfolio-reimagined">
        <SVGRenderer
          :svg="starSVGString"
          class="social-icon h-6 w-auto fill-current text-cream"></SVGRenderer>
      </a>
      <span class="ml-2 tab" v-text="starCount"></span>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref,computed,onMounted,Ref } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import Repo from '../interfaces/Repo'
import { getRepo } from '../utils/helper-functions'
import SVGRenderer from './SVGRenderer.vue'
import eyeSVGString from '../assets/iconmonstr-eye-lined.svg?raw'
import starSVGString from '../assets/iconmonstr-star-lined.svg?raw'

const watchCount:Ref<Number> = ref<Number>(0)
const starCount:Ref<Number> = ref<Number>(0)

const footer = computed(() => ({
  'text-center': true,
  'footer': true
}))

onMounted(async () => {
  const repo:Repo = await getRepo()

  if (repo) {
    watchCount.value = repo.watchers_count
    starCount.value = repo.stargazers_count
  }
})
</script>
