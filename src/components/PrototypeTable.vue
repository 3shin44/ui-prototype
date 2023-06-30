<template>
  <div class="prototype-table">
    <!-- body: table -->
    <div class="row base-table-body">
      <el-table
          v-loading="loading"
          :data="displayData"
          v-bind="elTableAttrs"
          @row-click="rowClick"
      >
        <template v-for="(item, index) in getHeaders">
          <!-- checkbox -->
          <el-table-column
              v-if=" item.type==='checkbox' "
              :label="item.label"
              :width="item.width"
              :min-width="item.minWidth"
              :key="index"
              v-bind="item.colAttrs"
          >
            <template slot-scope="scope">
              <input type="checkbox" v-model="scope.row.checked">
            </template>
          </el-table-column>
          <!-- default column -->
          <el-table-column
              v-else
              :prop="item.data"
              :label="item.label"
              :width="item.width"
              :min-width="item.minWidth"
              :key="index"
              v-bind="item.colAttrs"
          >
          </el-table-column>
        </template>

      </el-table>
    </div>
    <!-- footer: indicator, pagination -->
    <div class="base-table-footer pt-2">
      <!-- 資料總筆數 -->
      <div class="row">
        <p class="text-start">顯示第 {{ startNo }} 至 {{ endNo }} 項結果，共 {{ tableData.length }} 項</p>
      </div>
      <!-- 頁碼 -->
      <div class="row">
        <el-pagination
            class="d-flex justify-content-center"
            background layout="prev, pager, next"
            :total="tableData.length"
            :current-page.sync="currentPageNo"
            :page-size="numberPerPage">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>

<script>
  /**
   * Prototype table with Number of dataset and pagination
   * @displayName Prototype Table
   */
  export default {
    name: 'PrototypeTable',
    props: {
      /**
       * 原生讀取動畫
       */
      loading: {
        type: Boolean,
        default: false
      },
      /**
       * 表頭設定檔 type
       * @values type 欄位類型 (ex. checkbox)
       * @values data 資料key值 (object key name)
       * @values label 欄位標籤
       * @values width 欄位寬度 (Ex. prop: 100 -> get 100px)
       * @values minWidth 最小寬大(%) Ex. prop: 10 -> get 10%)
       */
      headers: {
        type: Array,
        default: () => []
      },
      /**
       * 原始資料來源
       */
      tableData: {
        type: Array,
        default: () => []
      },
      /**
       * 每頁顯示資料量
       */
      numberPerPage: {
        type: Number,
        default: 10
      },
      /**
       * 原生表格屬性 (如: stripe, border)
       * @values 以物件傳入原生表格屬性 ( :el-table-attrs="{stripe: 'stripe', border: 'border'}" )
       */
      elTableAttrs: {
        type: Object,
        default: () => {
        }
      },
      /**
       * 外部指定跳至第幾頁 (有防呆, 不能指定超出範圍頁數)
       */
      toPageNo: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        // 顯示資料起訖數
        startNo: 0,
        endNo: 0,
        // 當前頁碼
        currentPageNo: 1
      }
    },
    methods: {
      /**
       * Element-UI 原生方法: 欄位資料被點擊 
       * @param {object} rowData 被點擊時傳入該筆資料
       */
      rowClick(rowData) {
         /**
         * emit 被點擊的資料
         * @property {object} rowData 被點擊的資料
         */
        this.$emit('row-click', rowData)
      },

      /**
       * 根據當前頁碼 更新起訖資料筆數
       */
      updatePageNo(){
        // 更新起使頁碼
        if (this.currentPageNo === 1) {
          this.startNo = 1
        } else {
          this.startNo = (this.currentPageNo - 1) * this.numberPerPage + 1
        }
        // 更新結束頁碼
        if ((this.currentPageNo * this.numberPerPage) < this.tableData.length) {
          this.endNo = this.currentPageNo * this.numberPerPage
        } else {
          this.endNo = this.tableData.length
        }
      }
    },
    computed: {
      // 表格顯示資料集
      displayData(){
        // 無資料
        if (this.tableData.length === 0) {
          this.startNo = 0
          this.endNo = 0
          return []
        }
        // 有資料更新起訖範圍, 回傳對應資料範圍
        this.updatePageNo()
        return this.tableData.slice(this.startNo - 1 , this.endNo)
      },

      // 表頭
      getHeaders(){
        // 無指定表頭, 使用預設物件KEY值做欄位名稱
        if(this.headers.length === 0){
          let defaultHeaders = []
          for( const [key, value] of Object.entries(this.tableData[0]) ){
            defaultHeaders.push({
              data: key,
              label: key
            })
          }
          return defaultHeaders
        }

        // 使用外部指定表頭
        return this.headers
      }
    },
    watch: {
      // 指定跳頁
      toPageNo(newVal) {
        let maxPageNo = Math.ceil((this.tableData.length / this.numberPerPage))
        if (newVal <= maxPageNo) {
          this.currentPageNo = newVal
        } else {
          this.currentPageNo = 1
        }
      }
    },
    created() { },
    mounted() { }
  }
</script>


<style lang="scss" scoped>
</style>