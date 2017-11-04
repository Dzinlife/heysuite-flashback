import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import FastClick from 'fastclick'
import store from './store'

Vue.config.productionTip = false

FastClick.attach(document.body, {
  touchBoundary: 20
})

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})