import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => 
      import(/* webpackChunkName: "Categories" */ '../layouts/DefaultLayout.vue'),
    children: [{
      path: ':slug',
      name: "Tasks",
      component: () => import(/* webpackChunkName: "Categories" */ '../views/Tasks.vue'),
      props: true,
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'sidemenu__link_active',
  base: process.env.BASE_URL,
  routes
})

export default router
