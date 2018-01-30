<template>
  <div>
    <p>用户名</p>
    <input v-model="username" type="text">
    <p>密码</p>
    <input v-model="password" type="password">
    <button v-on:click="login" class="submit">提交</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import authSrv from '@/api/auth.js'
export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {},
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    login () {
      this.$store.commit('increment')
      const {username, password, $router} = this
      const data = {
        name: username,
        pwd: password
      }
      authSrv
        // .register(this, data)
        .query(this, data)
        .then(rep => {
          // success call back
          if (!rep.code) {
            $router.go({
              name: 'home'
            })
          } else {
            alert(rep.code)
          }
        }, rep => {
          // error call back
          alert('error')
        })
    }
  }
}
</script>

<style scoped>
  .submit{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
