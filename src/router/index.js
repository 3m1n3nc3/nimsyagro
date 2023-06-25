import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/contact-us',
          name: 'contact',
          component: () => import('../views/ContactUs.vue')
        },
        {
          path: '/products-and-services',
          name: 'services',
          component: () => import('../views/ProductServices.vue')
        },
        {
          path: '/request-our-service',
          name: 'request',
          component: () => import('../views/RequestService.vue')
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: () => import('../views/GalleryViewer.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/Page404.vue'),
    }
  ]
})

export default router
