<template>
  <div>
    <a>桂林电子科技大学选课系统</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
a{
    font-size: 50px;
    margin-left: 400px;
}

</style>