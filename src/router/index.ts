import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Embed from '../views/Embed.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/embed',
      component: Embed
    }
  ]
})

export default router