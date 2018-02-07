<template>
<div id="wrap">
  <el-form :model="form" :rules="rules" ref="form" label-position="left" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" size="medium">登录</el-button>
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
      form:{
        username:'',
        password:''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名'}
        ],
        password: [
          {required: true, message: '请输入密码'}
        ]
    }
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
      console.log('lg')
      const data = {
        name: this.form.username,
        pwd: this.form.password
      }
      console.log(data)
      authSrv
         .login(this, data,this.jump)
      
    }
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