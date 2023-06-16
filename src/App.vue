<template>
  <div id="app">
    <div class="p-2 ui-prototype-bg-dark">
      <h1>
        <router-link to="/" class="text-white text-decoration-none">UI Prototype Demo</router-link>
      </h1>
    </div>

    <div class="d-flex">
      <nav
          class="main-col-nav d-flex flex-column ui-prototype-shadow"
          :class="{ 'main-col-nav__acvitve': toggleNav }"
      >
        <!-- RWD Toggle Button -->
        <button
            class="btn btn-outline-secondary main-toggle-btn p-0"
            @click="toggleNav = !toggleNav"
        >{{ toggleNav ? '<' : '>'}}
        </button>

        <!-- List of routes -->
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
      <div class="main-col-view p-3">
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
      viewList: [],
      toggleNav: false
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

<style lang="scss" scoped>

  .main-col-nav{
    padding: 50px 0.5rem 0.5rem 0.5rem;
    top: 0;
    position: fixed;
    z-index: 9;
    width: 190px;
    min-height: 100%;
    background-color: var(--bs-light);
    transform: translateX(-100%);
    transition: .3s;
  }
  .main-col-nav__acvitve{
    transform: translateX(0);
  }

  .main-col-view{
    width: 100%;
  }

  .main-toggle-btn{
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate3d(-50%, -50%, 0);
    background-color: var(--bs-light);
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media screen and (min-width: 992px) {
    .main-col-nav{
      position: relative;
      transform: unset;
      padding: 0.5rem;
      min-width: 190px;
      min-height: calc(100vh - 50px);
      width: 16.66667%;
    }
    .main-toggle-btn{
      display: none;
    }
    .main-col-view{
      width: 83.33333%;
    }
  }

</style>
