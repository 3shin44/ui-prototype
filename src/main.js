import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

// elementUI (完整引入 Element, lang=TW)
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App),
}).$mount('#app')
