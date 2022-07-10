import { navigationStore } from '../stores/navigation-store';

export const mobileStateHandler = () : void => {
  if (window.innerWidth < 768 && !navigationStore.isMobile) {
    navigationStore.updateMobile(true)
  }
  if (window.innerWidth >= 768 && navigationStore.isMobile) {
    navigationStore.updateMobile(false)
  }
  window.addEventListener('resize',() => {
    if (window.innerWidth < 768 && !navigationStore.isMobile) {
      navigationStore.updateMobile(true)
    }
    if (window.innerWidth >= 768 && navigationStore.isMobile) {
      navigationStore.updateMobile(false)
    }
  })
}