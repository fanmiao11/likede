import { login, getInfo } from '@/api'

// 通过cookies存token
import { getToken, setToken, removeToken } from '@/utils/auth'

import { resetRouter } from '@/router'


const getDefaultState = () => {
  return {
    token: getToken(),
    // name: '',
    userId: '',
    clientToken:'',
    userInfo:'',
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERID:(state,userId) => {
    state.userId = userId
  },
  SET_USERINFO: (state, payload) => {
    state.userInfo = payload
  },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
}

const actions = {
  // user login
  async login({ commit }, payload) {
      const {token,userId} = await login(payload)
      commit("SET_TOKEN",token);
      commit('SET_USERID',userId)
      setToken(token)
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.userId).then(response => {
        const res = response
        // console.log('getinfo',res);
        if (!res) {
          return reject('Verification failed, please Login again.')
        }
        commit("SET_USERINFO", res);
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {

    removeToken() // must remove  token  first
    resetRouter()
    commit('RESET_STATE')
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

