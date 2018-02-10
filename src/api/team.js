const TEAM_URL = 'backend/teams'
const USER_URL = 'backend/students' // 后可再加子域名

export default {
  name: 'teamSrv',
  notLogin () {
    return !localStorage.getItem('teamstyle_id')
  },
  showAll (context) {
    console.log('loading')
    context.$http({
      url: TEAM_URL,
      method: 'get',
    }).then(response => {
      context.teamlist = response.body.teams
      console.log('success')
    }, response => {
      console.log('gg')
    })
  },

  showMyteam (context) {
    context.$http({
      url: TEAM_URL,
      method: 'get',
      params: localStorage.getItem('teamstyle_id'), // userid
    }).then(response => {
      console.log('success')
      context.myteam = response.body.teams
    }, response => {
      console.log(response.status)
    })
  },

  isLeader (context) {
    if(!localStorage.getItem('teamstyle_id')){
      alert('请先登录再进行操作')
      context.$router.push('/login')
    } else {
      context.$http({
        url: USER_URL,
        method: 'get',
        params: localStorage.getItem('teamstyle_id')
      }).then(response => {
        context.isLeader = response.body.isleader
      }, response => {
        console.log(response.status)
      })
    }
  },

  createTeam (context) {
    if(!localStorage.getItem('teamstyle_id')){
      alert('登录状态丢失，请先登录')
      context.$router.push('/login')
    } else{
      const data = {
        userid: localStorage.getItem('teamstyle_id'), // 用户id
        teamname: context.form.teamname,
        invitecode: context.form.invitecode
      }
      context.$http({
        url: TEAM_URL,
        method: 'post',
        body: data,
        //timeout: 1000
      }).then(response => {
        //jump to my team
      }, response => {
        alert(response.body.msg)
      })
    }
  },
  
  checkCode (context, data) {
    if(notLogin()){
      alert('请先登录再进行操作')
      context.$router.push('/login')
    } else{
      context.$http({
        url: TEAM_URL, // 校验验证码
        method: 'get',
        params: data,
        timeout: 1000
      }).then(response => {
        //jump to my team
      }, response => {
        // 校验失败
        alert(response.msg)
      })
    }
  },

  removeMember (context) {
    const data = {
      userid: localStorage.getItem('teamstyle_id'),
      membersid:[],
    }
    context.$http({
      url: TEAM_URL,
      method: 'post',
      body: data
    }).then(response => {
      context.myteam = response.body.teams
    },)
  },
  resetCode (context,data){
    context.$http({
      url: TEAM_URL,
      method: 'post',
      params: data
    }).then(response => {
      //change context
      console.log('reset code success')
    }, response => {
      console.log('gg')
    })
  }
}