# Vue Doc Gen 說明

## 說明

1. 由vue-docgen抓取指定位置下的元件, 依據註解產生說明文檔
2. 預設指令 `yarn vue-docgen src/components/*.vue docs/components` 抓取src/components下所有.vue檔案, 文檔產生至docs/components下
3. 另外使用設定檔docgen.config.js, 預設於專案根目錄下, 若要另外指定路徑如 `yarn vue-docgen -c {path}/docgen.config.js`

## BUG紀錄

vue-docgen BUG很多, 兩大類

## 參考文件

- https://vue-styleguidist.github.io/docs/docgen-cli.html#config