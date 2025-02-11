import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import Aboutpage from '../pages/Aboutpage.vue'
import Servicespage from '../pages/Servicespage.vue'
import Contactpage from '../pages/Contactpage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutpage
    },
    {
      path: '/services',
      name: 'services',
      component: Servicespage
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contactpage
    }
  ]
})

export default router