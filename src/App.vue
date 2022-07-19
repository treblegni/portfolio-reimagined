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
import anime from 'animejs'
import { ref,Ref,onMounted } from 'vue'
import { navigationStore } from './stores/navigation-store'
import { mobileStateHandler } from './utils/helper-functions'
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

const navBar:Ref<HTMLElement | null> = ref(null)
let scrollPosition:Number = 0
let animated:Boolean = false

const navigationScrollEffect = () => {
  const app = document.querySelector('div#app')
  app?.addEventListener('scroll',() => {
    const nav:HTMLElement|null = app.querySelector('nav')
    
    if (nav) {
      if (app.scrollTop <= nav.offsetHeight && !animated) {
        nav.style.transform = `translateY(-${app.scrollTop}px)`
      }
      else {
        let translationY = nav.style.transform.split('(')[1].split(')')[0]
        if (app.scrollTop > scrollPosition) {
          if (animated) {
            anime({
              targets: nav,
              translateY: `-${nav.offsetHeight}px`
            })
          }
          nav.style.transform = `translateY(-${nav.offsetHeight}px)`
          animated = false
        }
        else {
          if (parseInt(translationY) == -(nav.offsetHeight)) {
            anime({
              targets: nav,
              translateY: `0px`
            })
            animated = true
          }
        }
      }
      scrollPosition = app.scrollTop
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