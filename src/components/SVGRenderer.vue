<template>
<div 
	ref="svgContainer"
	:class="containerClasses">
</div>
</template>

<script lang="ts" setup>
import { ref,computed,onMounted } from 'vue'
const
	props = defineProps({
		'svgString':String
	}),
	svgContainer = ref<HTMLElement | null>(null)

const	renderSVG = () => {
	if (props.svgString && svgContainer.value) {
		svgContainer.value.innerHTML = props.svgString
		const svg = svgContainer.value.querySelector('svg')
    if (svg) {
      const path = svg.querySelector('path')
      if (path) {
        svg.removeAttribute('height')
        svg.setAttribute('width','auto')
        svg.setAttribute('id','svg-render')
      }
    }
	}
}
const containerClasses = computed(() => {
	return {
		'flex justify-center align-center': true
	}
})
onMounted(() => {
	renderSVG()
})
</script>