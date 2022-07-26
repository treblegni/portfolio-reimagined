<template>
<svg
	ref="svgDOM"
	@click="$emit('click')">
</svg>
</template>

<script lang="ts" setup>
import { ref,computed,onMounted } from 'vue'

const
	props = defineProps({
		'svg':String,
    'url':String,
    'asIs':Boolean
	}),
	svgDOM = ref<SVGElement | null>(null)

const generateSVG = (data:string,dom:SVGElement|null) : SVGElement|null => {
  const
    parser = new DOMParser(),
    doc = parser.parseFromString(data,'image/svg+xml'),
    svg = doc.querySelector('svg'),
    paths = svg?.querySelectorAll('path'),
    masks = svg?.querySelectorAll('mask')
  
  if (!props.asIs) {
    if (svg) {
      if (paths) {
        paths.forEach(path => {
          path.removeAttribute('stroke')
          path.removeAttribute('fill')
        })
      }
      if (masks) {
        masks.forEach(mask => {
          mask.removeAttribute('x')
          mask.removeAttribute('y')
          mask.removeAttribute('width')
          mask.removeAttribute('height')
        })
      }
    }
  }
  if (svg) {
    if (!props.asIs) {
      svg.removeAttribute('fill')
    }
    svg.removeAttribute('height')
    svg.removeAttribute('width')
    
    const classes = dom?.classList
    if (classes) {
      classes.forEach((c:string) => {
        svg.classList.add(c)
      })
    }
    // svg.addEventListener('click',() => {
    //   this.$emit('click')
    // })
    return svg
  }
  return null
}

const	renderSVG = () => {
	if (props.svg) {
    const svg:SVGElement|null = generateSVG(props.svg,svgDOM.value)
    if (svg) {
      svgDOM.value?.replaceWith(svg)
    }
	}
  else if (props.url && svgDOM.value)
  fetch(props.url)
    .then(response => response.text())
    .then(data => {
      if (data.startsWith('<svg')) {
        const svg:SVGElement|null = generateSVG(data,svgDOM.value)
        if (svg) {
          svgDOM.value?.replaceWith(svg)
        }
      }
    })
    .catch(err => {
      console.log(err)
    })
}

onMounted(() => {
	renderSVG()
})
</script>