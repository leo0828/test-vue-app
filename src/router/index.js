import { createRouter, createWebHistory } from "vue-router/auto"

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/theme",
      name: "Theme",
      component: () => import("../views/theme/IndexView.vue"),
    },
    {
      path: "/decimal",
      name: "Decimal",
      component: () => import("../views/decimal/IndexView.vue"),
    },
    {
      path: "/chart",
      name: "Chart",
      component: () => import("../views/chart/IndexView.vue"),
    },
    {
      path: "/table",
      name: "Table",
      component: () => import("../views/table/IndexView.vue"),
    },
    {
      path: "/animation",
      name: "Animation",
      component: () => import("../views/animation/IndexView.vue"),
    },
    {
      path: "/font",
      name: "Font",
      component: () => import("../views/font/IndexView.vue"),
    },
    {
      path: "/image",
      name: "Image",
      component: () => import("../views/image/IndexView.vue"),
    },
    {
      path: "/sticky",
      name: "Sticky",
      component: () => import("../views/sticky/IndexView.vue"),
    },
  ],
})

export default router
