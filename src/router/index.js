import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/newsApp/home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/newsApp',
    redirect: '/newsApp/home'
  },
  {
    path: '/newsApp/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newsApp/financial',
    name: 'Financial',
    component: () => import(/* webpackChunkName: "Financial" */ '../views/Financial.vue')
  },
  {
    path: '/newsApp/crypto',
    name: 'Crypto',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/Crypto.vue')
  },
  {
    path: '/newsApp/sports',
    name: 'Sports',
    component: () => import(/* webpackChunkName: "sports" */ '../views/Sports.vue')
  },
  {
    path: '/newsApp/weather',
    name: 'Weather',
    component: () => import(/* webpackChunkName: "weather" */ '../views/Weather.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
