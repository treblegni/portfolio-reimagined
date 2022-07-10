import { createRouter,createWebHistory } from 'vue-router'
// Pages
import Home from '../pages/Home.vue'

// defined routes
const routes = [
  { path: '/', component: Home }
]

// Instance that will handler router history
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router