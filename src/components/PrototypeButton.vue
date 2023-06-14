<template>
  <div class="prototype-button">
    <button class="btn btn-outline-primary" @click="count++">Prototype Button: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'PrototypeButton',
  props: {
  },
  data(){
    return {
      count: 0
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
