// Vue Router Entry file

// VueRouter
import VueRouter from 'vue-router'

//  View pages of component
import PrototypeButtonView from "@/views/PrototypeButtonView.vue"
import PrototypeSwitcherView from "@/views/PrototypeSwitcherView.vue"
import PrototypeTableView from "@/views/PrototypeTableView.vue"

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
    },
    {
        path: '/PrototypeTableView',
        name: 'P-TableView',
        component: PrototypeTableView
    }
]
const router = new VueRouter({
    routes
})

// 匯出使用說明: router: Vue載入VueRouter使用, routes設定檔則給App.vue頁面產生列表
export {router, routes}