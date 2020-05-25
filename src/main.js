import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'
import './main.css'

Vue.config.productionTip = false
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

new Vue({
  router,
  store,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App)
}).$mount('#app')
