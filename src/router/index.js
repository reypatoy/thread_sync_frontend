import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/',
      // component: () => import('../views/AboutView.vue'),
      children: [
        // {
        //   path: 'register',
        //   name: 'register',
        //   component: () => import('../views/auth/Register.vue')
        // },
      ]
    }
  ]
})

export default router
