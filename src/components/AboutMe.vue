<template>
<div class="grid grid-flow-row gap-8 text-center w-full">
  <div class="grid grid-flow-row gap-8">
    <div class="flex flex-col items-center relative">
      <p class="sub-title mb-2">Learn</p>
      <p class="secondary-title text-green-slime bg-green-dark px-4">About Me</p>
      <div class="absolute border-b-2 border-green-regular w-full top-9 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text max-w-sm ml-auto mr-auto">I’m a Computer Science graduate<br> working for a consulting firm that speciallizes in developing solutions for clients that help them manage their digital content.</p>
      <p class="content-text max-w-sm ml-auto mr-auto">My focus is in creating Frontend implementations<br> that incorporate best practices and modern technologies to deliver meaningful and engaging web experiences and are easy to navigate.</p>
    </div>
  </div>
  <div class="grid grid-flow-row gap-8">
    <div class="flex justify-center relative">
      <p class="sub-title bg-green-dark px-4">My Tool Belt</p>
      <div class="absolute border-b-2 border-green-medium w-full top-2 -z-10"></div>
    </div>
    <div class="grid grid-flow-row gap-8">
      <p class="content-text">I’ve used many tools and technologies to develop web applications. Here are some I currently focus on:</p>
      <div class="flex justify-center items-center">
        <div class="flex flex-wrap justify-center -m-2">
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="viteSVG"
              :class="svgClasses"
              :svg="vite"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="vueSVG"
              :class="svgClasses"
              :svg="vue"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="nodeSVG"
              :class="svgClasses"
              :svg="node"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="tsSVG"
              :class="svgClasses"
              :svg="ts"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="tailwindSVG"
              :class="svgClasses"
              :svg="tailwind"
              :asIs="true">
            </SVGRenderer>
          </div>
          <div
            :class="svgContainerClasses"
            @mouseover="scaleUp"
            @mouseleave="scaleDown">
            <SVGRenderer
              id="eventstoreSVG"
              :class="svgClasses"
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
import { computed } from 'vue'
import node from '../assets/node.svg?raw'
import tailwind from '../assets/tailwind.svg?raw'
import ts from '../assets/typescript.svg?raw'
import vite from '../assets/vite.svg?raw'
import vue from '../assets/vue.svg?raw'
import eventstore from '../assets/eventstore.svg?raw'
import anime from 'animejs'
import SVGRenderer from './SVGRenderer.vue'

const scaleUp = (e:any) => {
  let target = e.target
  if (target) {
    let svg = target.querySelector('svg')
    if (!svg) {
      svg = target.closest('div').querySelector('svg')
    }
    anime({
      targets: svg,
      // translateX: 250,
      scale: 1.5
      // rotate: '1turn'
    })
  }
}
const scaleDown = (e:any) => {
  let target = e.target
  if (target) {
    let svg = target.querySelector('svg')
    if (!svg) {
      svg = target.closest('div').querySelector('svg')
    }
    anime({
      targets: svg,
      // translateX: 250,
      scale: 1
      // rotate: '1turn'
    })
  }
}

const svgContainerClasses = computed(() => ({
  'h-12 w-12 m-2': true
}))

const svgClasses = computed(() => ({
  'h-full w-full': true
}))
</script>