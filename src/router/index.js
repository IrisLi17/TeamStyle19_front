import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Login from '@/components/login'
import Reg from '@/components/reg'
import File from '@/components/file'
import Team from '@/components/team'
import ShowAllTeams from '@/components/ShowAllTeams'
import PwdChange from '@/components/PwdChange'
import upload from '@/components/upload'
import MyTeam from '@/components/MyTeam'
import teamProfile from '@/components/teamProfile'
import teamPulse from '@/components/teamPulse'
// import PhotoUpload from '@/components/PhotoUpload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'MyHome',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/file',
      name: 'File',
      component: File
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/ShowAllTeams',
      name: 'ShowAllTeams',
      component: ShowAllTeams
    },
    {
      path: '/PwdChange',
      name: 'PwdChange',
      component: PwdChange,
      meta: {
        requireAuth: true
      }
    },
    // for testing upload component
    /* {
      path: '/Upload',
      name: 'Upload',
      component: upload
    }, */
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam,
      children: [
        {
          path: '',
          component: teamProfile
        },
        {
          path: 'profile',
          component: teamProfile
        },
        {
          path: 'pulse',
          component: teamPulse
        },
        
      ]
    }
  ]
})
