const API_URL = '/#/api/login'

export default {
  name: 'authSrv',
  register (context, data) {
    return context.$http({
      url: API_URL,
      method: 'post',
      params: data
    }).then(response => {
      console.log(response.status)
    }, response => {
      alert(response.url)
      context.$store.commit('increment')
    })
  },
  login (context, data) {
    return context.$http({
      url: API_URL,
      method: 'get',
      params: data // 登录信息
    }).then(response => {
      // success call back
      context.$store.commit('updateUserInfo')
      console.log(response)
      alert('登录成功')
    }, response => {
      // fail call back
      // context.data做出改变
      alert(response.url) // msg假设为错误提示
    })
  },
  query (context, data) {
    return context.$http({
      url: API_URL,
      params: data
    })
  },
  modify (context, data) {
    return context.$http({
      url: API_URL,
      method: 'post',
      data: data
    })
  }
}
