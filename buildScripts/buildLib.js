// element UI真的這樣寫啊, 有沒有index.js之類全導入式的做法?

// 載入元件
import PrototypeButton from '../src/components/PrototypeButton.vue';
import PrototypeSwitcher from '../src/components/PrototypeSwitcher.vue';

// 建立元件列表
const componentsList = [
    PrototypeButton,
    PrototypeSwitcher
]

// 匯出安裝語法
const install = function (Vue, opts = {}) {
    componentsList.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {install}