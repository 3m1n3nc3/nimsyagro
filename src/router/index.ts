import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestService.vue')
    },
  ]
})

export default router
