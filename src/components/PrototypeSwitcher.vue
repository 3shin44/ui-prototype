<template>
  <div class="prototype-switcher">
    <div>
      <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
      </el-switch>
    </div>

    <div v-if="value" class="spinner-border mt-3" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrototypeSwitcher',
  props: {
    switch:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: false
    }
  },
  watch: {
    switch(newVal) {
      this.value = newVal
    }
  },
}
</script>


<style lang="scss" scoped>
</style>
