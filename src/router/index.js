import { beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/CategoriesView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue') //Lazy loading
        },
        {
          path: 'product-details',
          // path: '/product/:id',
          name: 'product',
          component: () => import('../views/ProductDetail.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/ShopView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        },
        {
          path: 'blog-details',
          name: 'blog-details',
          component: () => import('../views/BlogDetails.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('../views/CheckoutView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/CartView.vue')
        }
      ]
    },

    // TODO : Add Authentication Layout
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach(() => {
  
})

export default router
