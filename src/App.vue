<template>
  <div id="app">
    <div class="p-2 ui-prototype-bg-dark">
      <h1>
        <router-link to="EntryView" class="text-white text-decoration-none">UI Prototype Demo</router-link>
      </h1>
    </div>

    <div class="d-flex">
      <nav class="d-flex flex-column col-2 p-2 ui-prototype-shadow fill-height">
        <router-link to="EntryView" class="btn btn-light" :class="{ 'active' : $route.name == 'EntryView' }" >Entry</router-link>
        <router-link to="PrototypeButtonView" class="btn btn-light" :class="{ 'active' : $route.name == 'PrototypeButtonView' }" >P-Button</router-link>
        <router-link to="PrototypeSwitcherView" class="btn btn-light" :class="{ 'active' : $route.name == 'PrototypeSwitcherView' }" >P-Switcher</router-link>
        <hr>
        ©ui-prototype
      </nav>
      <div class="col-10 p-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    // this.$router.push({name: 'EntryView'})
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
