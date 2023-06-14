// element UI真的這樣寫啊, 有沒有index.js之類全導入式的做法?

// 載入元件
import PrototypeButton from '../src/components/PrototypeButton.vue';

// 建立元件列表
const componentsList = [
    PrototypeButton
]

// 匯出安裝語法
export function install(Vue) {
    componentsList.forEach(component => {
        Vue.component(component.name, component)
    })
}