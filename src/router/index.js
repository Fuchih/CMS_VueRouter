import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Users from '@/components/menu/Users.vue'
import Authority from '@/components/menu/Authority.vue'
import Items from '@/components/menu/Items.vue'
import Order from '@/components/menu/Order.vue'
import Setup from '@/components/menu/Setup.vue'
import UserInfo from '@/components/menu/userinfo/UserInfo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/Login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
        { path: 'users', component: Users, meta: { requiresAuth: true } },
        { path: 'authority', component: Authority, meta: { requiresAuth: true } },
        { path: 'items', component: Items, meta: { requiresAuth: true } },
        { path: 'order', component: Order, meta: { requiresAuth: true } },
        { path: 'setup', component: Setup, meta: { requiresAuth: true } },
        { path: 'userinfo/:id', component: UserInfo, props: true, meta: { requiresAuth: true } }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
