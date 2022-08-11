<template>
<transition>
  <Navigation
    v-if="navigationStore.homeVisited"
    class="px-10 absolute z-10 top-0 left-0 w-full">
  </Navigation>
</transition>
<div class="flex justify-center">
  <div class="max-w-screen-lg w-full">
    <router-view></router-view>
  </div>
</div>
<transition>
  <SocialBadges
    v-if="navigationStore.homeVisited && !navigationStore.isMobile"
    class="fixed ml-10 mb-8 bottom-0 left-0">
  </SocialBadges>
</transition>
<Footer v-if="navigationStore.homeVisited"></Footer>
</template>

<script setup lang="ts">
import anime from 'animejs'
import { ref,Ref,onMounted } from 'vue'
import { navigationStore } from './stores/navigation-store'
import { mobileStateHandler } from './utils/helper-functions'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'
import SocialBadges from './components/SocialBadges.vue'

const navBar:Ref<HTMLElement | null> = ref(null)
let scrollPosition:Number = 0
let animated:Boolean = false
let closed:Boolean = false

const navigationScrollEffect = () => {
  const app = document.querySelector('div#app')
  app?.addEventListener('scroll',() => {
    const nav:HTMLElement|null = app.querySelector('nav')
    
    if (nav) {
      if (app.scrollTop <= nav.offsetHeight && !animated) {
        nav.style.transform = `translateY(-${app.scrollTop}px)`
      }
      else {
        if (app.scrollTop >= scrollPosition) {
          if (app.scrollTop >= nav.offsetHeight) {
            if (!closed) {
              anime({
                targets: nav,
                translateY: `-${nav.offsetHeight}px`
              })
              nav.classList.add('shadow-lg')
              nav.style.transition = 'box-shadow 0.2s ease-out'
              closed = true
              animated = true
            }
          }
        }
        else {
          if (app.scrollTop >= nav.offsetHeight) {
            if (closed) {
              anime({
                targets: nav,
                translateY: `0px`,
                complete: () => {
                  if (app.scrollTop == 0) {
                    anime.remove(nav)
                  }
                }
              })
              closed = false
              animated = true
            }
          }
          else {
            if (app.scrollTop == 0) {
              nav.classList.remove('shadow-lg')
              animated = false
            }
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

<style scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>