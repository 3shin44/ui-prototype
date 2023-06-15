<template>
  <div class="prototype-button">
    <!--
      triggered on click
      @event click
      @property {number} count - add count when click
    -->
    <button
        class="btn btn-outline-primary"
        @click="addCount">
      Prototype Button: {{ count }}
    </button>
  </div>
</template>

<script>

/**
 * PrototypeButton subtitle or description
 * @displayName Prototype Button
 */
export default {
  name: 'PrototypeButton',
  props: {
  },
  data(){
    return {
      count: 0
    }
  },
  methods:{
    /**
     * method description ( count +1 )
     * @public
     */
    addCount(){
      this.count++
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
