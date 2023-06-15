<template>
  <div class="blank-component">
    <h1>blank-component</h1>
    <p>This component is standard template, comments are apply for Doc-gen </p>
    <!--
      triggered on click
      @event click
      @property {object} demo - example
      @property {number} called - test called
    -->
    <button @click="$emit('click', 'test')">Button</button>
  </div>
</template>

<script>
/**
 * subtitle or description
 * @displayName Title
 */
export default {
  name: 'BlankComponent',
  props: {
    /**
     * The size of the button
     * @values small, normal, large
     */
    size: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    /**
     * (Public method) emits event when button clicked
     * @param {string} text
     * @public
     */
    emitsEvents(){
      /**
       * Triggers when the number changes
       *
       * @property {number} newValue new value set
       * @property {number} oldValue value that was set before the change
       */
      this.$emit('change', newValue, oldValue)
    }
  },
  computed: {},
  watch: {},
  created(){},
  mounted(){}
}
</script>


<style lang="scss" scoped>
</style>
