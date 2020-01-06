import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '@/components/Overview.vue'
import Detail from '@/components/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Overview
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
