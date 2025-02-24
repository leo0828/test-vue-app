import { createRouter, createWebHistory } from 'vue-router/auto'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/IndexView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form/IndexView.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/chart/IndexView.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/table/IndexView.vue'),
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../views/animation/IndexView.vue'),
    },
  ],
})

export default router
