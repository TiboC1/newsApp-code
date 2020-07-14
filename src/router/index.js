import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/financial',
    name: 'Financial',
    component: () => import(/* webpackChunkName: "Financial" */ '../views/Financial.vue')
  },
  {
    path: '/crypto',
    name: 'Crypto',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/Crypto.vue')
  },
  {
    path: '/sports',
    name: 'Sports',
    component: () => import(/* webpackChunkName: "sports" */ '../views/Sports.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import(/* webpackChunkName: "weather" */ '../views/Weather.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
