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
        localStorage.setItem('teamstyle_pwd',data.pwd)
        alert('登录成功')
        if(typeof cb == 'function'){
          console.log('回调')
          cb(context)
        }
      } else {
        console.log('f')
        this.logout(context)
        alert(response.body.message)
        context.form.username = ''
        context.form.password = ''
      }
    }, response => {
      // fail call back
      this.logout(context)
      alert('fail') // msg假设为错误提示
      context.form.username = ''
      context.form.password = ''
      console.log('更新')
    })
  },

  logout (context) {
    localStorage.removeItem('teamstyle_id')
    localStorage.removeItem('teamstyle_name')
    localStorage.removeItem('teamstyle_pwd')
    context.$store.commit('clearUserInfo')
    context.$store.commit('setTeamindex',null)
    context.$store.commit('setisLeader',null)
  },
  getHeadpic (context) {
    const data = {
      userid: localStorage.getItem('teamstyle_id')
      //userid: '10'
    }
    return context.$http({
      url: API_URL+'headpic/',
      method: 'post',
      body: data
    }).then(response => {
      console.log('success headpic')
      context.headurl = "data:image/jpeg;base64,"+response.body
    }, response => {
      console.log('fail')
      alert('fail')
    })
  },
  modify (context, cb) {
    const data = {
      id: localStorage.getItem('teamstyle_id'),
      oldpwd: localStorage.getItem('teamstyle_pwd'),
      newpwd: context.form.pwd
    }
    return context.$http({
      url: API_URL+'modify/',
      method: 'post',
      body: data
    }).then(response => {
      console.log(response)
      this.logout(context)
      if(typeof cb == 'function'){
        cb(context)
      }
    }, response => {
      alert('fail')
    })
  }
}
