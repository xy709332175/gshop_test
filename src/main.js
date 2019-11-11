import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'
import * as API from './api'


import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'

Vue.component('GshopHeader',GshopHeader)
Vue.config.productionTip = false
Vue.prototype.$API = API

new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  store
})
