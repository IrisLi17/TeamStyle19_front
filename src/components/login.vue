<template>
<div id="wrap">
  <el-form :model="form" label-position="left" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" size="medium">登陆</el-button>
      <p>没有账号？点击注册</p>
    </el-form-item>
  </el-form>
</div>
  <!--form!>
  <div>
    <div class='title'>
      <span v-on:click="fade1" id="log-but" v-bind:class="{fonts:faded1}">登陆</span>
      <span v-on:click="fade2" id="reg-but" v-bind:class="{fonts:faded2}">注册</span>
    </div>
    <div class='log-form' v-bind:class="{hide: faded1}">
      <div class='input-line'>
        <i class="fa fa-user-circle-o fa-lg"></i>
        <input v-model="username" type="text" placeholder="用户名">
      </div>
      <div class='input-line'>
        <i class="fa fa-key fa-lg"></i>
        <input v-model="password" type="password" placeholder="密码">
      </div>
      <button v-on:click="login" class="submit">提交</button>
    </div>
    <div class='reg-form' v-bind:class="{hide: faded2}">
      <div class='input-line'>
        <i class="fa fa-user-circle-o fa-lg"></i>
        <input v-model="username" type="text" placeholder="用户名">
      </div>
      <div class='input-line'>
        <i class="fa fa-key fa-lg"></i>
        <input v-model="password" type="password" placeholder="密码">
      </div>
      <div class='input-line'>
        <i class="fa fa-envelope fa-lg"></i>
        <input type="email" placeholder="邮箱地址">
      </div>
      <button v-on:click="register">注册</button>
    </div>
    <p>Count: {{ count }}</p>
  </form>
  </div-->
</template>

<script>
import authSrv from '@/api/auth.js'
export default {
  name: 'Login',
  data() {
    return{
      /*faded1: false,
      faded2: true*/
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
    /*fade1(){
      this.faded1 = false;
      this.faded2 = true;
    },
    fade2(){
      this.faded1 = true;
      this.faded2 = false;
    }*/
  }
}
</script>

<style lang="scss" scoped>
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
  /*form{
    width:60%;
    margin: 0 auto;
    padding-bottom: 20px;
    border: {
      width: 1px;
      style: dashed;
      color: black;
    }
  }
  .title{
    margin: 20px auto;
    height: 40px;
  }
  #log-but, #reg-but{
    border:none;
    outline: none;
    background-color: transparent;
    display: inline;
    font-size: 18px;
  }
  #log-but{
    width: 50%;
    float:left;
  }
  #reg-but{
    width: 50%;
    float: right;
  }
  input {
    margin: 0 auto;
    padding: 0;
    width:calc(100% - 30px);
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: {
      color: black;
      width: 2px;
      style: solid;
    }
  }
  .input-line{
    margin: 15px auto;
    width: 50%;
    height: 2em;
  }
  button{
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 50%;
    height: 2em;
    border:none;
    outline: none;
    cursor: pointer;
  }
  .hide{
    display:none;
  }
  .non-hide{
    display: block;
  }
  .fonts{
    font-size: 1.25em;
  }*/
</style>