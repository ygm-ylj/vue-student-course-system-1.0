<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <a class="login">第九组作品</a>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
            <header-nav-bar/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <side-bar/>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import HeaderNavBar from '../pages/HeaderNavBar'
import SideBar from '../pages/SideBar'

export default {
  name: 'Index',
  components: {
    HeaderNavBar,
    'SideBar': SideBar
  }
}
</script>

<style>
  .login{
    font-size: 50px;
    color: hotpink;
    font-family: 楷体;
    margin-left: 30px;
  }

</style>
