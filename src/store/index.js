import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    localStorage: {
      csrf: '',
      signedIn: false
    }
  },
  mutations: {
    signIn (state, payload) {
      state.localStorage = payload.localStorage
    },
    signOut (state, payload) {
      state.localStorage = payload.localStorage
    },
    signUp (state, payload) {
      state.localStorage = payload.localStorage
    }
  },
  actions: {
    signIn (context, payload) {
      context.commit('signIn', payload)
    },
    signOut (context, payload) {
      context.commit('signOut', payload)
    },
    signUp (context, payload) {
      context.commit('signUp', payload)
    }
  },
  plugins: [createPersistedState()]
})

export default store
