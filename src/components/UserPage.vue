<template>
  <div>
      <el-row class="tac">
  <el-col :span="3">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <span slot="title">查看队伍</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">修改密码</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name:'UserPage',
  data(){
      return{}
  }
}
</script>

<style lang="scss" scoped>
span{
  text-align: center;
  display: block;
}
</style>
