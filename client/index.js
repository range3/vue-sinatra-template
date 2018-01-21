import 'babel-polyfill'
import Vue from 'vue'

import router from './router'

const vm = new Vue({
  router,
  template: `
    <router-view></router-view>
  `,
})
vm.$mount('#app')
