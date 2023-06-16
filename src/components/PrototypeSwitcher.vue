<template>
  <div class="prototype-switcher">
    <div>
      <!--
        triggered on click
        @event click
        @property {object} demo - example
        @property {number} called - test called
      -->
      <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
      </el-switch>
      <span class="ms-3">Prototype Switcher: {{ value ? 'ON' : 'OFF' }}</span>
    </div>
  </div>
</template>

<script>
/**
 * @displayName Prototype Switcher TITLE
 * BLABLABLA subtitle
 */
export default {
  name: 'PrototypeSwitcher',
  props: {
    /**
     * Toggle State of Boolean
     * @values true/false
     */
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
