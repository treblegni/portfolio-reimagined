import { navigationStore } from '../stores/navigation-store';

const githubApi = 'https://api.github.com'
const user = 'treblegni'
const repo = 'portfolio-reimagined'

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

export const getRepo = () : any => {
  return fetch(`${githubApi}/repos/${user}/${repo}`)
  .then(res => res.json())
  .then(data => {
    return {watchers_count: data.watchers_count,stargazers_count: data.stargazers_count}
  })
}