<template>
  <div id="wrap">
  <el-form :model="form" label-position="left" label-width="80px">
    <el-form-item label="邮箱">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" size="medium">注册</el-button>
      <router-link to="/login"><p>已有账号？点击登陆</p></router-link>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'Reg',
}
</script>

<style lang="scss" scoped>
template {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#wrap {
  width: 50%;
  margin: 40px auto;
  max-width: 400px;
}
button {
  width: 100%;
}
p {
  font-size: 12px;
}
</style>
