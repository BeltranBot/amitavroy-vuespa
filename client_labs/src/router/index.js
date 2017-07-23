import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/pages/DashboardPage'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
Vue.use(Router)

const routes = [
  {path: '/', component: Hello, name: 'home', meta: {forVisitors: false}},
  {path: '/login', component: Login, name: 'login', meta: { forVisitors: false }},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true }}
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

export default router
