import { reactive } from "vue"

export const navigationStore = reactive({
  homeVisited: false,
  isMobile: false,
  updateHomeVisited() {
    this.homeVisited = !this.homeVisited
  },
  updateMobile(state:boolean) {
    this.isMobile = state 
  }
})