<template>
  <nav :class="navBar">
    <div :class="logo">
      <a href="#intro" class="cursor-pointer">
        <SVGRenderer :svg="svgString" class="h-10 fill-current text-cream"></SVGRenderer>
      </a>
    </div>
    <div :class="buttonContainer">
      <a href="#about" :class="navButton" @click="handleNavigation"> About </a>
      <a href="#contact" :class="navButton" @click="handleNavigation"> Message Me </a>
      <a
        :href="pdf"
        target="_blank"
        class="action-button hover:text-green-slime hover:border-green-slime cursor-pointer duration-100"
      >
        Resume
      </a>
    </div>
    <button
      v-if="navigationStore.isMobile"
      class="tab absolute flex items-center justify-center z-10 right-0 h-10 w-10 top-0 mt-8 mr-6"
      @click="clickHandler"
    >
      <div class="flex flex-col justify-center items-center relative h-4 w-4">
        <div id="line-one" :class="lineOne"></div>
        <div id="line-two" :class="lineTwo"></div>
        <div id="line-three" :class="lineThree"></div>
      </div>
    </button>
    <Footer
      v-if="navigationStore.homeVisited && isOpen && navigationStore.isMobile"
      class="mt-auto"
    ></Footer>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, Ref } from "vue";
import { navigationStore } from "../stores/navigation-store";
import anime from "animejs";
import SVGRenderer from "./SVGRenderer.vue";
import Footer from "./Footer.vue";
import svgString from "../assets/logo-name.svg?raw";
import pdf from "../assets/CS_Resume_07-13-2022.docx.pdf?url";

const isOpen: Ref<boolean> = ref(false);

if (!navigationStore.isMobile) {
  isOpen.value = false;
}

const animateHamburger = (state:Boolean):void => {
  if (state) {
    anime({
      targets: "div#line-one",
      rotate: "45deg",
      translateX: "18%",
    });
    anime({
      targets: "div#line-two",
      translateX: "-10px",
      opacity: 0,
    });
    anime({
      targets: "div#line-three",
      rotate: "-45deg",
      translateX: "18%",
    });
  } else {
    anime({
      targets: "div#line-one",
      rotate: "0",
      translateX: "0",
    });
    anime({
      targets: "div#line-two",
      translateX: "0",
      opacity: 1,
    });
    anime({
      targets: "div#line-three",
      rotate: "0",
      translateX: "0",
    });
  }
}

const handleNavigation = ():void => {
  isOpen.value = false

  animateHamburger(false)
}

const clickHandler = (event: Event): void => {
  isOpen.value = !isOpen.value;

  animateHamburger(isOpen.value)
};

const logo = computed(() => ({
  "mr-auto py-8": true,
}));

const navBar = computed((): object => ({
  "flex flex-shrink-0 bg-green-gray-dark transition": true,
  "flex-col": navigationStore.isMobile,
  "justify-between items-center": !isOpen.value || !navigationStore.isMobile,
  "h-screen": isOpen.value && navigationStore.isMobile,
}));

const buttonContainer = computed((): object => ({
  "grid grid-flow-col gap-8 items-center": !navigationStore.isMobile,
  "grid grid-flow-row gap-8 text-center mt-4": navigationStore.isMobile && isOpen.value,
  hidden: navigationStore.isMobile && !isOpen.value,
}));

const navButton = computed((): object => ({
  "tab hover:text-green-slime duration-100": true,
}));

const lineOne = computed(() => ({
  "mb-auto": !isOpen.value,
  "border-t-2 rounded w-full border-cream": true,
}));
const lineTwo = computed(() => ({
  "border-t-2 rounded w-full border-cream": true,
}));
const lineThree = computed(() => ({
  "mt-auto": !isOpen.value,
  "border-t-2 rounded w-full border-cream": true,
}));
</script>
