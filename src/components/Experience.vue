<template>
<div class="grid grid-flow-row gap-8 w-full">
  <div class="grid grid-flow-row gap-8">
    <div class="flex relative">
      <div>
        <p class="sub-title mb-2">Work</p>
        <p class="secondary-title text-green-slime bg-green-gray-dark pr-4">Experience</p>
      </div>
      <div class="absolute border-b-2 border-green-gray-regular w-full top-9 -z-10"></div>
    </div>
    <div class="">
      <div class="relative flex flex-row h-10">
        <div class="absolute grid grid-flow-col gap-8 top-0 right-0 h-full">
          <button
            v-for="exp in experience"
            :key="`tab-${exp.id}`"
            :class="tab(currentTab == exp.id)"            
            @click="handleTabSelection(exp.id)">
            {{exp.title}}
            <div
              v-if="currentTab == exp.id"
              :class="tabBorder(exp.id,currentTab == exp.id)"></div>
          </button>
        </div>
        <div class="border-b-2 border-green-gray-regular w-full"></div>
      </div>
      <div class="mt-8">
        <template v-for="exp in experience">
          <div
            v-if="currentTab == exp.id"
            :key="`content-${exp.id}`"
            :class="contentContainer">
            <div>
              <div class="relative overflow-hidden border-2 border-green-gray-medium rounded-md w-full" style="padding-bottom:100%">
                <img :src="exp.previewImage" class="absolute top-0 left-0 h-full w-full">
              </div>
            </div>
            <div class="col-span-3">
              <div class="content-title" v-text="exp.companyName"></div>
              <div class="text-xs regular-code">
                {{exp.startDate}} - {{exp.endDate}}
              </div>
              <p class="content-text mt-4" v-text="exp.responsibilities"></p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div> 
</div>
</template> 

<script setup lang="ts">
import anime from 'animejs';
import { ref,computed,onMounted,Ref } from 'vue'
import { navigationStore } from '../stores/navigation-store'
import Experience from '../interfaces/Experience'

const currentTab: Ref<Number> = ref(0)
//TODO: Create a new interface for experience object
const experience: Ref<Array<Experience>> = ref([])

const handleTabSelection = (tabId: Number) : void => {
  currentTab.value = tabId
}

const fetchExperience = () : void => {
  //Schema
  /*
  - Preview image of company
  - name of company
  - title
  - start date and end date
  - responsibilites
  */ 
  const exp = [
    {
      id: 0,
      companyName: 'gateB Consulting Inc.',
      title: 'Junior Web Develoer',
      startDate: '09/2020',
      endDate: '08/2022',
      responsibilities: 'At gateB, I primarily focused on Frontend development and productivity tools. My responsibilities included creating implementations that met client scopes, designing, and testing our integrations. I also wrote scripts for automating part of the busy work needed for our development cycles using Python and Javascript. When not developing, I would also assist with deployments which often required bootstrapping of assets.',
      previewImage: 'https://i.imgur.com/PACoDXO.png'
    },
    {
      id: 1,
      companyName: 'VotingSmarter',
      title: 'Applications Developer Intern',
      startDate: '05/2020',
      endDate: '09/2020',
      responsibilities: 'At VotingSmarter, me and a team of 3 developers were tasked to develop an internal tool that content managers could interface with to manage questions and datasets for the VotingSmarter App. We built the portal from the ground up using ReactJS and Firebase with me helming Front-end development and design.',
      previewImage: 'https://i.imgur.com/64XukSe.png'
    },
    {
      id: 2,
      companyName: 'Los Angeles City Hall - Board of Public Works',
      title: 'Systems Support Intern',
      startDate: '06/2019',
      endDate: '09/2020',
      responsibilities: 'At Los Angeles City Hall, I handled support tickets employees submitted relating to computer repair, network configuration and diagnostics, account access and security, and general maintenance.',
      previewImage: 'https://i.imgur.com/93yFF1R.png'
    }
  ]
  experience.value = exp
}

// const svgContainerClasses = computed(() => ({
//   'h-12 m-2': true
// }))

// const svgClasses = computed(() => ({
//   'h-full': true
// }))

const tab = (isActive:Boolean) => ({
  'hover:text-green-slime transition': true,
  'text-green-slime': isActive,
  'h-full relative tab': true
})

const tabBorder = (id:Number,isActive:Boolean) => {
  return {
    'w-0': !isActive,
    'w-full absolute border-b-2 border-green-slime bottom-0 transition-all': true
  }
}

const contentContainer = computed(() => ({
  'grid grid-cols-4 gap-8': true
}))

onMounted(() => {
  fetchExperience()
})
</script>