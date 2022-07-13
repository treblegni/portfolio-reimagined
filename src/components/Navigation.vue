<template>
<nav :class="navBar">
  <div :class="logo">
    <a href="#intro" class="cursor-pointer">
      <SVGRenderer 
        :svg-string="svgString"
        class="h-10"></SVGRenderer>
    </a>
  </div>
  <div :class="buttonContainer">
    <a href="#about" :class="navButton">
      About
    </a>
    <a href="#contact" :class="navButton">
      Message Me
    </a>
    <a :href="pdf" target="_blank" class="action-button hover:text-green-slime hover:border-green-slime cursor-pointer">
      Resume
    </a>
  </div>
  <button 
    v-if="navigationStore.isMobile"
    class="tab absolute z-10 right-0 top-0 mt-10 mr-10"
    @click="clickHandler">{{isOpen ? 'Close':'Open'}}
  </button>
  <Footer v-if="navigationStore.homeVisited && isOpen" class="mt-auto"></Footer>
</nav>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import SVGRenderer from './SVGRenderer.vue'
import Footer from './Footer.vue'
import svgString from '../assets/logo-name.svg?raw'
import pdf from '../assets/CS_Resume_07-11-2022.docx.pdf?url'

const isOpen: Ref<boolean> = ref(false)

const clickHandler = (event:Event) : void => {
  isOpen.value = !isOpen.value
}

const logo = computed(() => ({
  'mr-auto py-8': true
}))

const navBar = computed(() : object => ({
  'flex flex-shrink-0 backdrop-blur': true,
  'flex-col': navigationStore.isMobile,
  'justify-between items-center': !isOpen.value || !navigationStore.isMobile,
  'h-screen': isOpen.value && navigationStore.isMobile
}))

const buttonContainer = computed(() : object => ({
  'grid grid-flow-col gap-8 items-center': !navigationStore.isMobile,
  'grid grid-flow-row gap-8 text-center mt-4': navigationStore.isMobile && isOpen.value,
  'hidden': navigationStore.isMobile && !isOpen.value
}))

const navButton = computed(() : object => ({
  'tab hover:text-green-slime': true
}))
</script>
