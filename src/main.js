import Vue from 'vue'
import App from './App.vue'
// 自动根据设备情况动态设置rem的值的大小
import 'lib-flexible/flexible'
// 检测器
import './veevalidate'
import * as API from './api'
import {Button} from 'mint-ui'
import './mock/mockServer'


import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import CartControl from './components/CartControl/CartControl.vue'

Vue.component('GshopHeader',GshopHeader)
Vue.component('CartControl',CartControl)
Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.prototype.$API = API

new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  store
})
