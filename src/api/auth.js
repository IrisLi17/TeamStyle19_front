const API_URL = '/backend/students/'

export default {
  name: 'authSrv',
  register (context,cb) {
    const data = {
      name: context.form.username,
      pwd: context.form.password,
      email: context.form.email
    }
    console.log(data)
    return context.$http({
      url: API_URL,
      method: 'POST',
      body: data
    }).then(response => {
      alert('Congratulations! You have created your account.')
      console.log(response)
      if(typeof cb == 'function'){
        cb(context)
      }
    }, response => {
      console.log(response)
      alert(response.status)
      context.form.email = ''
      context.form.username = ''
      context.form.password = ''
    })
  },
  login (context, cb) {
    const data = {
      name: context.form.username,
      pwd: context.form.password
    }
    console.log(data)
    return context.$http({
      url: API_URL,
      method: 'GET',
      body:data,
      params: data.name // 登录信息
    }).then(response => {
      // success call back      
      console.log(response)      
      context.$store.commit('updateUserInfo',data)
      localStorage.setItem('teamstyle_id',response.body.userid) //最好改成id
      alert('登录成功')
      if(typeof cb == 'function'){
        console.log('回调')
        cb(context)
      }
    }, response => {
      // fail call back
      context.$store.commit('clearUserInfo')
      localStorage.removeItem('teamstyle_id')
      alert(response.body.msg) // msg假设为错误提示
      context.form.username = ''
      context.form.password = ''
      console.log('更新')
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
