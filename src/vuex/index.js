import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userid: localStorage.getItem('teamstyle_id'),
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
      state.userid = payload
      console.log(state.userid)
    },
    clearUserInfo (state) {
      state.userid = null
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
