<template>
  <div class="prototype-table-view">
    <h2>PrototypeTable DEV</h2>
    <PrototypeTable 
      :table-data="tableData" 
      :headers="headers" 
      :number-per-page="nubmerPerPage" 
      @row-click="rowClick"
      :to-page-no="toPageNo"
    />

    <div class="p-table-container pt-3 mt-3 border">
      <p class="text-center">Mock data (JSON)</p>
      <div class="d-flex p-3 align-items-center justify-content-center">
        <button 
          class="btn btn-primary" 
          @click="updateTable"
        >
          UPDATE
        </button>
      </div>
      <div class="d-flex">
        <div class="p-table-textarea p-1">
          DATA
          <textarea v-model="mockData"></textarea>
        </div>
        <div class="p-table-textarea p-1">
          HEADER
          <textarea v-model="mockHeaders"></textarea>
        </div>
        <div class="p-table-config p-1">
          Table Config
          <div>
            - Nubmer per page
            <el-input 
              v-model="mockNubmerPerPage" 
              type="number"
              min="1"
            />
            - To Page No
            <el-input 
              v-model="mockToPageNo" 
              type="number"
              min="1"
            />
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import PrototypeTable from "@/components/PrototypeTable.vue";
export default {
  name: 'PrototypeTableView',
  props: { },
  components:{ PrototypeTable },
  data() {
    return {
      // table data & config
      tableData: [
      {
          "funcName": "yFU5UQBjIgfWvg9",
          "userName": "5akfu",
          "ID": 1
        },
        {
          "funcName": "n8VjoEoMpdcaMWI",
          "userName": "1wH1k",
          "ID": 2
        },
        {
          "funcName": "XzD2E1Ru9lGHp2I",
          "userName": "sE2tU",
          "ID": 3
        },
        {
          "funcName": "WtQXwTgmIi5Saj2",
          "userName": "XopTk",
          "ID": 4
        },
        {
          "funcName": "2NOL4qtPOX6NAky",
          "userName": "YF4xY",
          "ID": 5
        },
        {
          "funcName": "5sGcoLGw3ITx49o",
          "userName": "cyX9w",
          "ID": 6
        },
        {
          "funcName": "dt4TZdoP2euRzvs",
          "userName": "64Hl4",
          "ID": 7
        },
        {
          "funcName": "QtQg70UKbU6TaTq",
          "userName": "mfz3G",
          "ID": 8
        },
        {
          "funcName": "fBr6xbplgS2IUWu",
          "userName": "aAOkx",
          "ID": 9
        },
        {
          "funcName": "7pOJzYtGxQvWLrb",
          "userName": "EhULh",
          "ID": 10
        },
        {
          "funcName": "gRAX2q1LKkBFJqB",
          "userName": "WegEJ",
          "ID": 11
        }
      ],
      headers: [
        {
          "label": "Function ID",
          "data": "ID"
        },
        {
          "label": "Function Name",
          "data": "funcName"
        },
        {
          "label": "User Name",
          "data": "userName"
        }
      ],
      nubmerPerPage: 10,
      toPageNo: 1,

      // mock
      mockData: "",
      mockHeaders: "",
      mockNubmerPerPage: 10,
      mockToPageNo: 1
    }
  },
  methods: {
    // 更新參數
    updateTable(){
      this.tableData = this.mockData ? JSON.parse(this.mockData) : []
      this.headers = this.mockHeaders ? JSON.parse(this.mockHeaders) : [] 
      this.nubmerPerPage = Number(this.mockNubmerPerPage)
      this.toPageNo = Number(this.mockToPageNo)
    },
    // 顯示點擊資料
    rowClick(rowItem){
      console.log(rowItem)
    }
  },
  mounted(){
    // 掛載當前測試資料
    this.mockData = JSON.stringify(this.tableData)
    this.mockHeaders = JSON.stringify(this.headers)
  }
}
</script>


<style lang="scss" scoped>
  .p-table-container{
    .p-table-textarea{
      width: 35%;
    }

    .p-table-config{
      width: 30%;
    }

    textarea{
      width: 100%;
      height: 150px;
    }
  }
</style>
