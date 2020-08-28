<template>
  <div>
    <div class="select">
      <el-select v-model="value" clearable placeholder="请选择" @clear="clear" @change="selectGet">
        <el-option
          v-for="item in major"
          :key="item.majorId"
          :label="item.majorId"
          :value="item.majorId"
        ></el-option>
      </el-select>
    </div>
    <div v-show="showRentPrise" v-if="isReloadData">
      <course-table/>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['reload'],
  components: {
    CourseTable: resolve => require(['./CourseTable'], resolve)
  },
  data () {
    return {
      major: [],
      value: '',
      currentMajor: '',
      course: [],
      total: 0,
      currentPage: 1,
      pageSize: 5,
      showRentPrise: false,
      isReloadData: true
    }
  },
  created () {
    this.$axios
      .get('ChooseMajor')
      .then((response) => (this.major = response.data.data))
  },
  methods: {
    clear () {
      this.showRentPrise = false
    },
    selectGet (vId) {
      this.currentMajor = vId
      this.showRentPrise = true
      console.log(vId)
      this.isReloadData = false
      this.$nextTick(() => {
        this.isReloadData = true
      })
    }
  }
}
</script>

<style scoped>
.bottom {
  bottom: 0px;
  position: absolute;
}
.table {
  height: 370px;
}
</style>