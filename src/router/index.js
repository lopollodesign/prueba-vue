import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito.vue'
import Coin from '../views/Coin.vue'
import Course from '../views/Course.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course
  },
  {
    path: '/coin/:id',
    name: 'coin',
    component: Coin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
