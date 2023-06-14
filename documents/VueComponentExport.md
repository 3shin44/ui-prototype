# Vue 發布套件說明

## 說明

Vue 元件匯出並提供其他專案匯入, 可概分為下列幾個步驟
1. 整理: 欲匯出的元件透過export方式匯出
2. 安裝語法: 將欲導出元件寫好導入語法(Vue install/component)
3. 打包為Library: 透過Vue Library指令打包元件

### 2. 安裝語法: 單一元件導入語法範例

```
import FooComponent from './FooComponent.vue'

FooComponent.install = function (Vue) {
    Vue.component('FooComponent', FooComponent)
}

export default FooComponent
```

### 2. 安裝語法: 多筆元件導入語法範例

```
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const Components = [
    Foo,
    Bar
]

const install = function (Vue, opts = {}) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}

export default install
```

### 3. 打包為Library

Vue 打包語法 `vue-cli-service build --target lib —-name myLib [entry]`

說明: 
--target lib 打包為一個library
--name 後面接兩個參數: 打包後名稱與指令檔位置

以本專案為例: `vue-cli-service build --target lib —-name ui-prototype ./buildScripts/buildLib.js`

https://medium.com/@debbyji/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8B-npm-%E5%A5%97%E4%BB%B6-%E6%8A%8A-vue-component-%E6%89%93%E5%8C%85%E5%88%B0-npm-%E5%90%A7-e5f9a6901c5c