// Vue basic setting
import Vue from 'vue'
import App from './App.vue'

// Vue Router
import {router} from './router/index.js'
Vue.use(VueRouter)

Vue.config.productionTip = false

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

// elementUI (完整引入 Element, lang=TW)
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
Vue.use(ElementUI, { locale })

// import custom CSS
import '@/assets/css/index.scss'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
