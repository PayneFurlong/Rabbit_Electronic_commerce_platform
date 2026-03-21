import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: true,
      children: [
        // 当选中 / 时，里面的 children 的 path 为 '' 时默认也渲染
        { path: '', component: Home },
        { path: 'category/:id', component: Category }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router
