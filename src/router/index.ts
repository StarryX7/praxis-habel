import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import Aboutpage from '../pages/Aboutpage.vue'
import Servicespage from '../pages/Servicespage.vue'
import Contactpage from '../pages/Contactpage.vue'
import Postspage from '../pages/Postspage.vue'
import Impressum from '../pages/Impressum.vue'

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
      path: '/posts',
      name: 'posts',
      component: Postspage
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contactpage
    },
    {
      path:  '/impressum',
      name: 'impressum',
      component: Impressum
    }
  ]
})

export default router