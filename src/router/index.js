import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CvOnline from '../views/CvOnline.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv-online',
    name: 'CvOnline',
    component: CvOnline
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
