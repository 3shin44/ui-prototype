// Vue Router Entry file

// VueRouter
import VueRouter from 'vue-router'

//  View pages of component
import EntryView from "@/views/EntryView.vue"
import PrototypeButtonView from "@/views/PrototypeButtonView.vue"
import PrototypeSwitcherView from "@/views/PrototypeSwitcherView.vue";

// Router path config
const routes = [
    {
        path: '/PrototypeButtonView',
        name: 'P-ButtonView',
        component: PrototypeButtonView
    },
    {
        path: '/PrototypeSwitcherView',
        name: 'P-SwitcherView',
        component: PrototypeSwitcherView
    }
]
const router = new VueRouter({
    routes
})

// 匯出使用說明: router: Vue載入VueRouter使用, routes設定檔則給App.vue頁面產生列表
export {router, routes}