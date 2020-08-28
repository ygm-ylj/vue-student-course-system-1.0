<template>
  <div v-if="isReloadData">
    <el-table 
      :data="course.slice((currentPage-1)*pageSize,currentPage*pageSize)"  
      style="width: 40%"><!-- data取到行数据 -->
      <el-table-column
        prop="courseId"
        label="课程编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="课程名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teacher.teacherName"
        label="任教教师"
        width="180">
      </el-table-column>
      <el-table-column>
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
         </template>
      </el-table-column>
    </el-table>
      <el-pagination background class="bottom"
            @current-change="handleCurrentChange" 
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
      </el-pagination>
  </div>
  </template>

<script>
import ElementUI from 'element-ui'

export default {
  inject: ['reload'],
  data () {
    return {
      course: [],
      currentMajor: this.$parent.currentMajor,
      total: 0,
      currentPage: 1,
      pageSize: 5,
      isReloadData: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    handleClick (row) {
      this.$axios
        .get('CourseSelection?courseid=' + row.courseId)
        .then(res => {
          if (res.data.code === 200) {
            this.getData()
            this.load()
          } else {
            console.log(res)
            ElementUI.Message.error(res.data.msg)
          }
        })
    },
    handleCurrentChange (val) {
      // 改变默认的页数
      this.currentPage = val
    },
    load () {
      this.isReloadData = false
      this.$nextTick(() => {
        this.isReloadData = true
      })
      console.log('刷新')
    },
    getData () {
      this.$axios
        .get('ChooseCourse?majorid=' + this.currentMajor)
        .then(response => {
          console.log('获取课程')
          this.pageSize = 5
          this.currentPage = 1
          this.course = response.data.data
          this.total = this.course.length
          console.log(this.course)
        })
    }
  }
}
</script>

<style scoped>
  .bottom{
    bottom: 0px;
    position: relative;
  }
 div{
   height: 330px;
 }
</style>