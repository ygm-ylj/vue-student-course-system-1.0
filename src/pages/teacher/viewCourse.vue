<template>
  <div class="deit">
    <div class="crumbs">
      <div class="cantainer">
        <el-table
          style="width: 100%;"
          :data="course.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        >
          <el-table-column prop="courseId" label="课号" width="150"></el-table-column>
          <el-table-column prop="courseName" label="课程名称" width="180"></el-table-column>
          <el-table-column prop="teacher.teacherName" label="老师姓名" width="150"></el-table-column>
          <el-table-column prop="major.majorId" label="专业编号" width="150"></el-table-column>
          <el-table-column prop="major.school.schoolName" label="学院名称" width="180"></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="addStudent(scope.row)">添加学生</el-button>
              <el-button size="mini" type="danger" @click="viewStudent(scope.row)">查看学生</el-button>
              <el-button size="mini" type="danger" @click="delCourse(scope.row)">删除课程</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[4, 8, 16, 32]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="course.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      currentPage: 1, // 初始页
      pagesize: 4, //  每页的数据
      course: []
    }
  },
  created () {
    this.handlecourse()
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    handlecourse () {
      this.$axios
        .get('ViewTeaching')
        .then((res) => {
          /* 模拟服务器响应 */
          if (res.data.code === 200) {
            this.course = res.data.data
          } else {
            console.log(res.data.msg)
          }
        })
    },
    delCourse (row) {
      // 弹出确定取消框，是否删除用户
      this.$confirm('是否删除该课程', '删除提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$axios.get('deleteCourses?courseId=' + row.courseId).then((res) => {
        // 判断如果删除失败，就做提示
          if (res.data.code !== 200) return this.$message.error('课程删除失败')
          // 修改成功的提示
          this.$message.success('课程删除成功')
          this.reload()
          // 重新请求最新的数据
          this.getUserListId()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    viewStudent (row) {
      console.log(row.courseId)
      this.$router.push({path: '/viewStudentByCourseId', query: {courseId: row.courseId}})
    },
    addStudent (row) {
      console.log(row.courseId)
      this.$router.push({path: '/addSomeStudent', query: {courseId: row.courseId}})
    }
  }
}
</script>

<style scoped>
</style>