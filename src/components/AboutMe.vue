<template>
<div class="grid grid-flow-row gap-8 text-center w-full">
  <div class="grid grid-flow-row gap-8">
    <div class="flex flex-col items-center relative">
      <p class="sub-title mb-2">Learn</p>
      <p class="secondary-title text-green-slime bg-green-gray-dark px-4">About Me</p>
      <div class="absolute border-b-2 border-green-gray-regular w-full top-9 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text max-w-sm ml-auto mr-auto">I’m a Computer Science graduate<br> working for a consulting firm that speciallizes in developing solutions for clients that help them manage their digital content.</p>
      <p class="content-text max-w-sm ml-auto mr-auto">My focus is in creating Frontend implementations<br> that incorporate best practices and modern technologies to deliver meaningful and engaging web experiences and are easy to navigate.</p>
    </div>
  </div>
  <div class="grid grid-flow-row gap-8">
    <div class="flex justify-center relative">
      <p class="sub-title bg-green-gray-dark px-4">My Tool Belt</p>
      <div class="absolute border-b-2 border-green-gray-medium w-full top-2 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text">I’ve used many tools and technologies to develop web applications. Here are some I currently focus on:</p>
      <div class="flex justify-center">
        <div class="grid grid-flow-col gap-4">
          <div
            class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="viteSVG"
              class="h-full"
              :svg="vite"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="vueSVG"
              class="h-full"
              :svg="vue"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="nodeSVG"
              class="h-full"
              :svg="node"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div 
            class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="tsSVG"
              class="h-full"
              :svg="ts"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="tailwindSVG"
              class="h-full"
              :svg="tailwind"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div class="relative h-12"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="eventstoreSVG"
              class="h-full"
              :svg="eventstore"
              :asIs="true">
            </SVGRenderer>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import node from '../assets/node.svg?raw'
import tailwind from '../assets/tailwind.svg?raw'
import ts from '../assets/typescript.svg?raw'
import vite from '../assets/vite.svg?raw'
import vue from '../assets/vue.svg?raw'
import eventstore from '../assets/eventstore.svg?raw'
import anime from 'animejs/lib/anime.es.js'
import {navigationStore} from '../stores/navigation-store'
import SVGRenderer from './SVGRenderer.vue'

const scaleUp = (e) => {
  let svg = e.target.querySelector('svg')
  if (!svg) {
    svg = e.target.closest('div').querySelector('svg')
  }
  anime({
    targets: svg,
    // translateX: 250,
    scale: 1.5
    // rotate: '1turn'
  })
}
const scaleDown = (e) => {
  let svg = e.target.querySelector('svg')
  if (!svg) {
    svg = e.target.closest('div').querySelector('svg')
  }
  anime({
    targets: svg,
    // translateX: 250,
    scale: 1
    // rotate: '1turn'
  })
}
</script>
