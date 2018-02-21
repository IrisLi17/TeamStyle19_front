const TEAM_URL = 'backend/teams/'
const USER_URL = 'backend/students/' // 后可再加子域名

export default {
  name: 'teamSrv',
  notLogin () {
    return !localStorage.getItem('teamstyle_id')
  },
  showAll (context) {
    console.log('loading')
    context.$http({
      url: TEAM_URL+'allteam',
      method: 'get',
    }).then(response => {
      context.team = []
      context.teamid = []
      for(var i in response.body){
        context.team.push({
          teamname: response.body[i].teamname,
          teamleader: response.body[i].leader,
          teammember: []
        })
        for(var j=1;j<response.body[i].scale;j++){
          if(response.body[i]["member"+j]) context.team[i].teammember.push(response.body[i]["member"+j])
        }
        context.teamid.push(response.body[i].teamid)
      }
      console.log(context.teamid)
      //console.log(context.team)
      //console.log(response.body)
    }, response => {
      console.log('gg')
      context.team = [{
        teamname: 'efsdgrfuioahfioasufhasui',
        teamleader: '张狗蛋',
        teammember: ['fake1','fake2','fake3']
    },
    {
        teamname: '阿斯顿v哈稍等v阿达VS的VS v的',
        teamleader: 'sdv33659d6fgdgf',
        teammember: []
    }]
    })
  },

  showMyteam (context) {
    const data = {
      userid: localStorage.getItem('teamstyle_id')
    }
    context.$http({
      url: TEAM_URL,
      method: 'get',
      params: localStorage.getItem('teamstyle_id'), // userid
    }).then(response => {
      console.log(response.body)
      context.team = response.body
      //context.memberid
    }, response => {
      console.log(response.status)
      context.team = [{teammember:'fake1'},{teammember:'fake2'},{teammember:'fake3'}]
      context.memberid = [100,101,102]
    })
  },

  isLeader (context) {
    if(!localStorage.getItem('teamstyle_id')){
      alert('请先登录再进行操作')
      context.$router.push('/login')
    } else {
      context.$http({
        url: USER_URL+'leader/',
        method: 'POST',
        body: {
          userid: localStorage.getItem('teamstyle_id')
        }
      }).then(response => {
        console.log(response.body)
        context.isleader = response.body.isleader
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
        url: TEAM_URL+'add/',
        method: 'post',
        body: data,
        //timeout: 1000
      }).then(response => {
        if(response.body.success == true){
          alert('success')
        } else {
          alert(response.body.message)
        }
        //jump to my team
      }, response => {
        alert('fail')
      })
    }
  },
  
  checkCode (context, data) {
    if(!localStorage.getItem('teamstyle_id')){
      alert('请先登录再进行操作')
      context.$router.push('/login')
    } else{
      const data = {
        userid: localStorage.getItem('teamstyle_id'), // 用户id
        teamid: context.$store.state.teamindex,
        invitecode: context.form.invitecode
      }
      console.log(data)
      context.$http({
        url: TEAM_URL+'join/', // 校验验证码
        method: 'post',
        body: data,
        timeout: 1000
      }).then(response => {
        if(response.body.success == true){
          alert('success')
        } else{
          alert(response.body.message)
        }
        //jump to my team
      }, response => {
        console.log(response)
        // 校验失败
        alert('fail')
      })
    }
  },

  removeMember (context, data, cb) {
    //var membersid = []
    //if(context.test.id1!=null) membersid.push(context.test.id1)
    //if(context.test.id2!=null) membersid.push(context.test.id2)
    //if(context.test.id3!=null) membersid.push(context.test.id3)
    //const data = {
    //  //userid: localStorage.getItem('teamstyle_id'),
    //  userid: membersid[0]
    //}
    context.$http({
      url: TEAM_URL+'exit/',
      method: 'post',
      body: data
    }).then(response => {
      //context.myteam = response.body.teams
      alert('success')
      if(typeof cb == 'function'){
        cb(context)
      }
    }, response => {
      alert('fail')
    })
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