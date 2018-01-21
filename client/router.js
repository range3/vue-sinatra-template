import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home.vue'
import About from './pages/about.vue'
import App from './pages/app.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/app',
      component: App,
    },
  ],
})

export default router
