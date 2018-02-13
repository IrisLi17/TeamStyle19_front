const API_URL = '/backend/students/'

export default {
  name: 'authSrv',
  register (context,cb) {
    const data = {
      name: context.form.username,
      pwd: context.form.password,
      email: context.form.email
    }
    var cookie = document.cookie
    console.log(data)
    console.log(document.cookie)
    var csrf = cookie.slice(cookie.search('csrftoken'))
    return context.$http({
      url: API_URL + 'reg/',
      method: 'POST',
      headers: {'X-CSRFToken':csrf},
      body: data,
      emulateJSON: true
    }).then(response => {
      if(response.body.success == true){
        alert('Congratulations! You have created your account.')
        console.log(response)
        if(typeof cb == 'function'){
          cb(context)
        }
      } else {
        alert(response.body.message)
        context.form.email = ''
        context.form.username = ''
        context.form.password = ''
      }
    }, response => {
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
      url: API_URL+'login/',
      method: 'POST',
      body:data
    }).then(response => {
      // success call back  
      if(response.body.success == true){
        context.$store.commit('updateUserInfo',{id:response.body.id,name:data.name})
        localStorage.setItem('teamstyle_id',response.body.id) //最好改成id
        localStorage.setItem('teamstyle_name',data.name)
        alert('登录成功')
        if(typeof cb == 'function'){
          console.log('回调')
          cb(context)
        }
      } else {
        console.log('f')
        context.$store.commit('clearUserInfo')
        context.$store.commit('setTeamindex',null)
        context.$store.commit('setisLeader',null)
        localStorage.removeItem('teamstyle_id')
        localStorage.removeItem('teamstyle_name')
        alert(response.body.message)
        context.form.username = ''
        context.form.password = ''
      }
    }, response => {
      // fail call back
      context.$store.commit('clearUserInfo')
      context.$store.commit('setTeamindex',null)
      context.$store.commit('setisLeader',null)
      localStorage.removeItem('teamstyle_id')
      localStorage.removeItem('teamstyle_name')
      alert('fail') // msg假设为错误提示
      context.form.username = ''
      context.form.password = ''
      console.log('更新')
    })
  },

  logout (context) {
    localStorage.removeItem('teamstyle_id')
    localStorage.removeItem('teamstyle_name')
    context.$store.commit('clearUserInfo')
    context.$store.commit('setTeamindex',null)
    context.$store.commit('setisLeader',null)
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
