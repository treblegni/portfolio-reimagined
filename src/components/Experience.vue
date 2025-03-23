<template>
  <div class="flex flex-col w-full">
    <div class="flex relative mb-8 flex-shrink-0">
      <div>
        <p class="sub-title mb-2">Work</p>
        <p class="secondary-title text-green-slime bg-green-dark pr-4">
          Experience
        </p>
      </div>
      <div
        class="absolute border-b-2 border-green-regular w-full top-9 -z-10"
      ></div>
    </div>
    <div :class="experienceContainer">
      <div
        :class="experienceNav"
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false">
        <div
          v-if="isSmallWidth"
          :class="experienceButtonsMobile">
          <button
            v-for="exp in experience"
            :key="`tab-${exp.id}`"
            :class="tab(currentTab == exp.id)"
            @click="handleTabSelection(exp.id)">
            {{ exp.title[0] }}
            <div
              v-if="currentTab == exp.id"
              :class="tabBorder(exp.id, currentTab == exp.id)"
            ></div>
          </button>
        </div>
        <div
          v-if="(isOpen && isSmallWidth) || !isSmallWidth"
          :class="experienceButtons">
          <button
            v-for="exp in experience"
            :key="`tab-${exp.id}`"
            :class="tab(currentTab == exp.id)"
            @click="handleTabSelection(exp.id)">
            {{ exp.title }}
            <div
              v-if="currentTab == exp.id"
              :class="tabBorder(exp.id, currentTab == exp.id)"
            ></div>
          </button>
        </div>
        <div
          v-if="!navigationStore.isMobile"
          class="border-b-2 border-green-regular w-full mt-auto"></div>
      </div>
      <template v-for="exp in experience">
        <div
          v-show="currentTab == exp.id"
          :class="experienceContent"
          id="experience-content">
          <div>
            <div
              class="relative overflow-hidden border-2 border-green-medium rounded-md w-full"
              style="padding-bottom: 100%">
              <img
                :src="exp.previewImage"
                class="absolute top-0 left-0 h-full w-full"/>
            </div>
          </div>
          <div
            :class="{
              'col-span-3': !navigationStore.isMobile,
              'md:col-span-2': navigationStore.isMobile,
            }">
            <div class="content-title" v-text="exp.companyName"></div>
            <div class="text-xs regular-code">
              {{ exp.startDate }} - {{ exp.endDate }}
            </div>
            <p class="content-text mt-4" v-html="exp.responsibilities"></p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted,onUpdated,Ref } from "vue";
import { navigationStore } from "../stores/navigation-store";
import Experience from "../interfaces/Experience";

const currentTab: Ref<Number> = ref(0);
//TODO: Create a new interface for experience object
const experience: Ref<Array<Experience>> = ref([]);
const isSmallWidth: Ref<Boolean> = ref(false)
const isOpen: Ref<Boolean> = ref(false)

const handleTabSelection = (tabId:Number): void => {
  currentTab.value = tabId
};

const monitorScreenWidthSmall = ():void => {
  const size = 640
  if (window.innerWidth < size && !isSmallWidth.value) {
    isSmallWidth.value = true
  }
  if (window.innerWidth >= size && isSmallWidth.value) {
    isSmallWidth.value = false
  }
  window.addEventListener('resize',() => {
    if (window.innerWidth < size && !isSmallWidth.value) {
      isSmallWidth.value = true
    }
    if (window.innerWidth >= size && isSmallWidth.value) {
      isSmallWidth.value = false
    }
  })
}

const fetchExperience = (): void => {
  const exp = [
    {
      id: 0,
      companyName: "gateB Consulting Inc.",
      title: "Junior Web Develoer",
      startDate: "09/2020",
      endDate: "08/2022",
      responsibilities:
        "At gateB, I was responsible for owning all Frontend implementations for the systems we developed and was involved in the design and planning phases for some of the features. I was also responsible for building upon and improving our frontend development process by introducing modern technologies and libraries to meet project requirements and time constraints.<br><br>Other responsibilities included creating tools for supporting our development cycle, content creation, and testing, and supporting live systems we develop.",
      previewImage: "https://i.imgur.com/PACoDXO.png",
    },
    {
      id: 1,
      companyName: "VotingSmarter",
      title: "Applications Developer Intern",
      startDate: "05/2020",
      endDate: "09/2020",
      responsibilities:
        "I was responsible for developing the Frontend for the internal portal that internal users use to manage data for the VotingSmarter App and website.<br><br>The portal was built from the ground up using ReactJS, Sass, and Firebase with me making decisions on design and architecture.",
      previewImage: "https://i.imgur.com/64XukSe.png",
    },
    {
      id: 2,
      companyName: "Los Angeles City Hall - Board of Public Works",
      title: "Systems Support Intern",
      startDate: "06/2019",
      endDate: "09/2020",
      responsibilities:
        "At Los Angeles City Hall, I was responsible for supporting our 100+ users. Daily tasks included responding to support tickets via the internal ticketing system and gathering information about the issue and then offering solutions. If the issue was hardware based, then I would schedule a time and day for maintenance.<br><br>I was also responsible for managing user accounts, software updates, simple network setup and configuration, user security, and data backup.",
      previewImage: "https://i.imgur.com/93yFF1R.png",
    },
  ];
  experience.value = exp;
};

const setMinHeightExperience = () => {
  const experienceSection:HTMLElement|null = document.querySelector('div#experience')

  if (experienceSection) {
    const
      experienceChildDiv:HTMLElement|null = experienceSection.firstElementChild as HTMLElement,
      contentViews:NodeListOf<HTMLElement> = experienceSection.querySelectorAll('div#experience-content'),
      experienceDisplay = experienceSection.style.display
    experienceSection.style.display = ''

    let height = 0
  
    contentViews.forEach((content:HTMLElement) => {
      const displayValue = content.style.display
      content.style.display = ''
      
      if (experienceChildDiv) {
        const currentHeight = experienceChildDiv.offsetHeight
        if (currentHeight > height) {
          height = currentHeight
        }
      }
      content.style.display = displayValue
    })
    experienceChildDiv.style.minHeight = `${height}px`
    experienceSection.style.display = experienceDisplay
  }
}

const tab = (isActive: Boolean) => ({
  "hover:text-green-slime transition": true,
  "text-green-slime": isActive,
  "h-10 relative tab": true,
});

const tabBorder = (id: Number, isActive: Boolean) => {
  return {
    "w-0": !isActive,
    "w-full absolute border-b-2 border-green-slime bottom-0 transition-all": true,
  };
};

onMounted(() => {
  fetchExperience()
  monitorScreenWidthSmall()
});

onUpdated(() => {
  setMinHeightExperience()
})

const experienceContainer = computed((): object => ({
  'flex relative sm:static': true,
  "flex-col": !navigationStore.isMobile,
}));

const experienceContent = computed(() => ({
  "mt-8 grid-cols-4": !navigationStore.isMobile,
  "md:grid-cols-3": navigationStore.isMobile,
  "flex flex-col md:grid gap-8": true,
}))

const experienceNav = computed((): object => ({
  "flex-shrink-0 group justify-end sm:justify-start": navigationStore.isMobile,
  "h-10 flex-col w-full": !navigationStore.isMobile,
  "overflow-hidden mr-10 sm:mr-0 sm:relative flex top-0 left-0": true,
}))

const experienceButtons = computed((): object => ({
  "absolute top-0 right-0 h-full grid grid-flow-col gap-8": !navigationStore.isMobile,
  "absolute z-10 bg-green-dark h-full sm:w-auto sm:static top-0 left-0 flex flex-col pr-10 items-start overflow-hidden": navigationStore.isMobile,
}))

const experienceButtonsMobile = computed((): object => ({
  "flex flex-col items-start": navigationStore.isMobile,
}))
</script>