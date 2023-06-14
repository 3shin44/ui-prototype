// Vue Router Entry file

// VueRouter
import VueRouter from 'vue-router'

//  View pages of component
import EntryView from "@/views/EntryView.vue"
import PrototypeButtonView from "@/views/PrototypeButtonView.vue"

// Router path config
const routes = [
    {
        path: '/EntryView',
        name: 'EntryView',
        component: EntryView
    },
    {
        path: '/PrototypeButtonView',
        name: 'PrototypeButtonView',
        component: PrototypeButtonView
    }
]
const router = new VueRouter({
    routes
})
export default router