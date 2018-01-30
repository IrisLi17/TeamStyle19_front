import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 1,
    userInfo: null
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
    }
  }
})
