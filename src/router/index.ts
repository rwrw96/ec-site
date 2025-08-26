import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // 商品一覧
      path: '/productList',
      name: 'productList',
      component: () => import('../views/ProductListView.vue'),
    },
    {
      // 商品詳細
      path: '/productShow',
      name: 'productShow',
      component: () => import('../views/ProductShowView.vue'),
    },
    {
      // カート
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      // 決済確認
      path: '/paymentConfirm',
      name: 'paymentConfirm',
      component: () => import('../views/PaymentConfirmView.vue'),
    },
    {
      // 決済完了
      path: '/paymentComplete',
      name: 'paymentComplete',
      component: () => import('../views/PaymentCompleteView.vue'),
    },
  ],
})

export default router
