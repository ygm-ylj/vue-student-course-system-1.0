<template>
  <div>
    <a class="a">你有如下{{total}}门课程选课信息</a>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="courseId"
        label="课程代号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="课程名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teacher.teacherName"
        label="任课教师"
        width="180">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">退课</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el v-model="value">
     </el>
    <el-pagination background class="bottom"
      @current-change="handleCurrentChange"
      :hide-on-single-page="value"
      :current-page="currentPage" 
      :page-size="pageSize" 
      layout="total, prev, pager, next, jumper"
      :total="total"> //总页数  
    </el-pagination>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .a {
    font-size: 30px;
        color: #67C23A;
        font-family: 楷体;
        margin-left: 20px;
  }
</style>

<script>
export default {
  inject: ['reload'],
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleClick (row) {
      console.log(row.courseId)
      console.log('aaaaaaaaaaa')
      this.$axios
        .get('aDeleteCourse?courseId=' + row.courseId)
        .then(res => {
          console.log('bbbbbbbbbres')
          console.log( res)
          if (res.data.code === 200) {
            this.reload()
          }
        })
    },
    handleCurrentChange (val) {
      // 改变默认的页数
      this.currentPage = val
    }
  },
  mounted () {
    const _that = this
    this.$axios
      .get('ViewSelected')
      .then(res => {
      /* 模拟服务器响应 */
        if (res.data.code === 200) {
          console.log(res.data.msg)
          this.pageSize = 5
          this.currentPage = 1
          this.tableData = res.data.data
          this.total=this.tableData.length
        } else {
          console.log(res.data.msg)
        }
      })
  },
  data () {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 5,
      value: true
    }
  },
  computed: {
    username () {
      return this.$store.getters.getUsername
    }
  }
}
</script>
