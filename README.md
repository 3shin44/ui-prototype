# ui-prototype

## 說明

此prototype完成下列需求:

(開發者)

- 開發者依專案架構進行元件開發
- 完成元件開發後自動產生說明文件
- 透過自動佈署完成測試、發布更新

(使用者)

- 透過NPM安裝導入元件
- 若有擴展需求提供指令產生未封裝.vue檔案, 提供改寫使用

## 系統架構說明

- 使用vue導出元件方式
- 使用jsDoc產生元件對應文件
- 使用GitHub Actions進行自動測試與發布

## 項目&進度

| 項目            | 狀態 | 說明 |
|---------------|----|----|
| 建立元件prototype |    |    |
| 導出元件          |    |    |
| 其他專案導入        |    |    |
| jsDoc產生文檔     |    |    |
| 元件單元測試        |    |    |
| 自動佈署          |    |    |
| 自動產生demo page |    |    |

## 重要檔案結構說明
```
package.json
docuements/
buildScripts/
    buildLib.js
src/
    main.js
    App.vue
    views/
        EntryView.vue
        PrototypeButtonView.vue
    components/
        PrototypeButton.vue
    router/
```

- package.json : 整包專案靠這玩意吃飯啊, 預設script功能詳列如下
    - build-demo-page: 產生展示頁web檔案 (產生檔案夾預設為: dist_demoPage)
    - build-export-component: 打包元件檔案 (產生檔案夾預設為: dist)
- buildScripts: 打包/導出的相關指令皆存放於此
    - buildLib.js: 打包元件匯出指令
- documents: 細節說明文件與自動產生的文件預設目錄
- src/App.vue, main.js: 開發頁面入口檔案
- src/views: VIEWS資料夾為頁面類, 命名方式為: 元件名稱+View, 用於開發測試與展示頁面使用
- src/components: COMPONENTS資料夾為各元件檔案
- router: Vue-router設定檔, 用於開發頁面與展示頁面切換分頁

## 元件開發流程

1. 建立新元件: 至src/compoenents下新增或由BlankComponent.vue複製一份新檔案
2. 建立頁面: