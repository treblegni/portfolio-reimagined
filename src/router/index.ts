import { createRouter,createWebHistory } from 'vue-router'
// Pages
import Home from '../pages/Home.vue'
import PageNotFound from '../pages/PageNotFound.vue'

// defined routes
const routes = [
  { path: '/', component: Home },
  { path: '', component: Home },
  { path: '/:pathMatch(.*)*', component: PageNotFound}
]

// Instance that will handler router history
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router