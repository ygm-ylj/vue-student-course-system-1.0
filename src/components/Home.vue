<template>
  <div class="item">
    <a>{{msg}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
    .item {
      word-break: break-all;
    }
</style>
