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

其他說明文檔 (/documents)

- VueComponentExport.md: 本專案元件導出與導入安裝說明
- VueDocGen.md: Vue-docgen 套件設定說明

## 系統架構說明

- 使用vue導出元件方式
- 使用jsDoc產生元件對應文件
- 使用GitHub Actions進行自動測試與發布

## 項目&進度

| 項目            | 狀態 | 說明       |
|---------------|----|----------|
| 建立元件prototype | O  | 已完成流程建構  |
| 導出元件          | O  | 已完成流程建構  |
| 其他專案導入        | O  | 已完成測試, 導入流程參DOC |
| jsDoc產生文檔     | O  | 已完成流程建構  |
| 元件單元測試        |    |          |
| 自動佈署          |    |          |
| 自動產生demo page | O  | 已完成流程建構  |

## 檔案結構&npm script說明
```
package.json
docuements/
buildScripts/
    buildLib.js
    docgen.config.js
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
### 檔案結構
- package.json : npm 專案管理入口檔案
- buildScripts: 打包/導出的相關指令皆存放於此
    - buildLib.js: 打包元件匯出指令
    - docgen.config.js: vue-docgen 設定檔
- documents: 細節說明文件與自動產生的文件預設目錄
- src/App.vue, main.js: 開發頁面入口檔案
- src/views: VIEWS資料夾為頁面類, 命名方式為: 元件名稱+View, 用於開發測試與展示頁面使用
- src/components: COMPONENTS資料夾為各元件檔案
- router: Vue-router設定檔, 開發DEMO頁面

### npm script
- serve: vue dev server
- build-demo-page: 產生展示頁web檔案 (產生檔案夾預設為: dist_demoPage)
- build-export-component: 打包元件檔案 (產生檔案夾預設為: dist)
- build-compo-doc: 產生元件說明文檔 (產生檔案夾預設為: documents/componentDoc, 設定檔: buildScripts/docgen.config.js)
- lint: lint check

## 元件開發流程

1. 建立新元件: 至src/components/BlankTemplate 下新增或由BlankComponent.vue複製一份新檔案, 例: Foo.vue
2. 建立DEMO頁面
    - 2-1. 建立DEMO頁面: 至src/views 下新增: FooView.vue
    - 2-2. 建立Router link: 至src/router/index.js 下新增對應參數
    - 2-3. 完成後應可在首頁看到所建立頁面
3. 發布流程
    - 3-1. 更新版本號
    - 3-2. 執行 `build-compo-doc` 建立文檔
    - 3-3. 執行 `npm publish` 發布