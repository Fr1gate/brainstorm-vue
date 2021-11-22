import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Categories',
      params: {slug: 'Дом'}
    }
  },
  {
    path: "/:slug",
    name: "Categories",
    component: () => import(/* webpackChunkName: "Categories" */ '../views/Categories.vue'),
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'sidemenu__link_active',
  base: process.env.BASE_URL,
  routes
})

export default router
