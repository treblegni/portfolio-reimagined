<template>
<transition>
  <Navigation
    v-if="navigationStore.homeVisited"
    class="px-10 absolute z-10 top-0 left-0 w-full">
  </Navigation>
</transition>
<div class="flex justify-center px-10">
  <div class="max-w-screen-lg w-full">
    <router-view></router-view>
  </div>
</div>
<Footer v-if="navigationStore.homeVisited"></Footer>
</template>

<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
import { ref,Ref,onMounted } from 'vue'
import { navigationStore } from './stores/navigation-store'
import { mobileStateHandler } from './utils/helper-functions'
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

const navBar:Ref<HTMLElement | null> = ref(null)

const hideNav = () => {
  anime({
    targets: 'nav',
    translateY: '800px'
  })
}

const showNav = () => {

}

const navigationScrollEffect = () => {
  const app = document.querySelector('div#app')
  app?.addEventListener('scroll',() => {
    const nav = app.querySelector('nav')
    
    if (app.scrollTop <= nav.offsetHeight) {
      nav.style.top = `-${app.scrollTop}px`
    }
    else {
      console.log('else')
    }
  })
}

onMounted(() : void => {
  //attaches handler that watches for screen size change
  mobileStateHandler()
  //listen for scroll event
  navigationScrollEffect()
})
</script>

<style>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>