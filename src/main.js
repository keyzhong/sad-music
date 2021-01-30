import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elemenUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/main.less'

Vue.use(elemenUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
