import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Artists from '@/components/artists/Artists'
import Records from '@/components/artists/Records'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/records',
    name: 'Records',
    component: Records
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

const router = new VueRouter({
  routes
})

export default router
