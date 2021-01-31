import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      token: localStorage.getItem('token') || '',
      userInfo: localStorage.getItem('userInfo') || {}
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      window.localStorage.setItem('token', token)
    },
    setUserInfo (state, data) {
      state.userInfo = data
      window.localStorage.setItem('userInfo', JSON.stringify(data))
    }
  },
  actions: {},
  modules: {}
})
