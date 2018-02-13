import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Login from '@/components/login'
import Reg from '@/components/reg'
import File from '@/components/file'
import Team from '@/components/team'
import ShowAllTeams from '@/components/ShowAllTeams'
import UserPage from '@/components/UserPage'

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
      component: Team
    },
    {
      path: '/ShowAllTeams',
      name: 'ShowAllTeams',
      component: ShowAllTeams
    },
    {
      path: '/UserPage',
      name: 'UserPage',
      component: UserPage
    }
  ]
})
