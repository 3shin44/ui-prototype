<template>
  <div id="app">
    <div class="p-2 ui-prototype-bg-dark">
      <h1>
        <router-link to="/" class="text-white text-decoration-none">UI Prototype Demo</router-link>
      </h1>
    </div>

    <div class="d-flex">
      <nav class="d-flex flex-column col-2 p-2 ui-prototype-shadow fill-height">
        <template v-for="(item, index) in viewList">
          <router-link
            :key="index"
            :to="item.path"
            class="btn btn-outline-secondary mb-1"
            :class="{ 'active' : $route.name == item.name }"
          >
            {{item.name}}
          </router-link>
        </template>

        <hr>
        ©ui-prototype
      </nav>
      <div class="col-10 p-2">
        <EntryView v-if="$route.path === '/'" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {routes} from "@/router"
import EntryView from "@/views/EntryView.vue";
export default {
  name: 'App',
  components: {EntryView},
  data() {
    return {
      // 元件展示頁列表 (此處會直接使用Router中的route資料)
      viewList: []
    }
  },
  methods: {
    // 檢查是否為未載入頁面狀態, 有載入清空
    resetRouterView(){
      if(this.$route.path != '/'){
        this.$router.replace({path: '/'})
      }
    },
    // 取得Route資料更新
    getRoutes(){
      this.viewList = routes
    }
  },
  created() {
    // update data from routes
    this.getRoutes()
  },
  mounted(){
    // reset to blank router-view
    this.resetRouterView()
  }
}
</script>

<style lang="scss">
  html, body{
    background-color: var(--bs-light);
  }

  .ui-prototype-bg-dark{
    background-color: rgb(66, 75, 92);
  }

  .ui-prototype-bg-light{
    background-color: rgba(66, 75, 92, 0.1);
  }

  .ui-prototype-shadow{
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  }

  .ui-prototype-row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  h1{
    margin: 0;
    font-size: 28px;
  }

  p{
    margin: 0;
  }

  .fill-height{
    height: calc(100vh - 70px);
  }
</style>
