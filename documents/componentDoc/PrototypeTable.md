# Prototype Table

> Prototype table with Number of dataset and pagination

## Props

| Prop name     | Description                                       | Type    | Values                                                                                                                                                                                     | Default          |
| ------------- | ------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| loading       | 原生讀取動畫                                      | boolean | -                                                                                                                                                                                          | false            |
| headers       | 表頭設定檔 type                                   | array   | `type 欄位類型 (ex. checkbox)`, `data 資料key值 (object key name)`, `label 欄位標籤`, `width 欄位寬度 (Ex. prop: 100 -&gt; get 100px)`, `minWidth 最小寬大(%) Ex. prop: 10 -&gt; get 10%)` | []               |
| tableData     | 原始資料來源                                      | array   | -                                                                                                                                                                                          | []               |
| numberPerPage | 每頁顯示資料量                                    | number  | -                                                                                                                                                                                          | 10               |
| elTableAttrs  | 原生表格屬性 (如: stripe, border)                 | object  | `以物件傳入原生表格屬性 ( :el-table-attrs="{stripe: 'stripe'`, `border: 'border'}" )`                                                                                                      | () =&gt; {<br/>} |
| toPageNo      | 外部指定跳至第幾頁 (有防呆, 不能指定超出範圍頁數) | number  | -                                                                                                                                                                                          | 1                |

## Events

| Event name | Properties                          | Description       |
| ---------- | ----------------------------------- | ----------------- |
| row-click  | **rowData** `object` - 被點擊的資料 | emit 被點擊的資料 |

---
