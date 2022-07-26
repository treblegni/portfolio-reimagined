import { navigationStore } from '../stores/navigation-store';

export const mobileStateHandler = () : void => {
  const size = 1024
  if (window.innerWidth < size && !navigationStore.isMobile) {
    navigationStore.updateMobile(true)
  }
  if (window.innerWidth >= size && navigationStore.isMobile) {
    navigationStore.updateMobile(false)
  }
  window.addEventListener('resize',() => {
    if (window.innerWidth < size && !navigationStore.isMobile) {
      navigationStore.updateMobile(true)
    }
    if (window.innerWidth >= size && navigationStore.isMobile) {
      navigationStore.updateMobile(false)
    }
  })
}