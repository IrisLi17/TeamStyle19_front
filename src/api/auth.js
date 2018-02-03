const API_URL = '/api/login'

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
      alert(response.status)
      //context.$store.commit('increment')
    })
  },
  login (context, data) {
    return context.$http({
      url: API_URL,
      method: 'get',
      params: data // 登录信息
    }).then(response => {
      // success call back      
      console.log(response)      
      if(data.name!=context.$store.state.userInfo.name || data.pwd!=context.$store.state.userInfo.pwd){
        context.$store.commit('updateUserInfo',data)
        localStorage.setItem('teamstyle_name',data.name)
        localStorage.setItem('teamstyle_pwd',data.pwd)
      }
      alert('登录成功')
      context.$router.push('home')
    }, response => {
      // fail call back
      // context.data做出改变
      context.$store.commit('clearUserInfo')
      localStorage.removeItem('teamstyle_name')
      localStorage.removeItem('teamstyle_pwd')
      alert(response.status) // msg假设为错误提示
    })
  },
  logout (context) {
    localStorage.clear()
    context.$store.commit('clearUserInfo')
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
