import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

const vm = new Vue({
  router,
  store,
  render: h => h(App),
})
vm.$mount('#app')
