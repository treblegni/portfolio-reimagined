<template>
<Nav></Nav>
<router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue'
import type { Ref } from 'vue'
import Nav from './components/Nav.vue';

let isMobile: Ref<boolean> = ref(false)

const mobileStateHandler = () => {
  if (window.innerWidth < 768 && !isMobile.value) {
    isMobile.value = true
  }
  if (window.innerWidth >= 768 && isMobile.value) {
    isMobile.value = false
  }
}

onMounted(() => {
  mobileStateHandler()
})
</script>