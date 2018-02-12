import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 1,
    userInfo: {
      name: localStorage.getItem('teamstyle_name'),
      pwd: localStorage.getItem('teamstyle_pwd')
    },
    teamindex: null,
    isLeader: null
  },
  getters: {

  },
  mutations: {
    // an example
    increment (state) {
      state.count ++
      console.log(state.count)
    },
    updateUserInfo (state, payload) {
      state.userInfo = payload
      console.log(state.userInfo)
    },
    clearUserInfo (state) {
      state.userInfo = null
      console.log('User Logout')
    },
    setTeamindex (state, payload) {
      state.teamindex = payload
      console.log('set teamindex to '+state.teamindex)
    },
    setisLeader (state, payload) {
      state.isLeader = payload
      console.log('isLeader: '+state.isLeader)
    }
  }
})
