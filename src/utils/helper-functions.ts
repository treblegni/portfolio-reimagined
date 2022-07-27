import axios from 'axios';
import Repo from '../interfaces/Repo';
import { navigationStore } from '../stores/navigation-store';

const endpoint = '/api/get-repo'
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

export const getRepo = () : Repo => {
  axios({
    method: 'GET',
    url: `${endpoint}?user=${user}&repo=${repo}`
  })
  .then(res => res.data)
  .then(data => {
    return {watchers_count: data.watchers_count,stargazers_count: data.stargazers_count}
  })
  .catch(err => console.log(err))
  return {watchers_count: 0,stargazers_count: 0}
}