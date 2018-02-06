<template>
<div id="wrap">
  <el-form :model="form" label-position="left" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" size="medium">登陆</el-button>
      <router-link to="/reg"><p>没有账号？点击注册</p></router-link>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import authSrv from '@/api/auth.js'
export default {
  name: 'Login',
  data() {
    return{
    }
  },
  components: {},
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    jump (context) {
      context.$router.push('/home')
    },
    login () {
      //console.log('lg')
      const {username, password, $router} = this
      const data = {
        name: username,
        pwd: password
      }
      // console.log(this)
      authSrv
         .login(this, data,this.jump)
      
    },
    register () {
      const {username, password, email} = this
      const data = {
        name: username,
        pwd: password,
        email: email
      }
      authSrv
        .register (this, data)
      console.log("trigger register")
    },
  }
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