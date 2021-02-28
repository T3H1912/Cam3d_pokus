import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NavMenu from '../views/NavMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/a',
    name: 'Home',
    component: Home
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: NavMenu
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
