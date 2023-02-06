export const store = Vuex.createStore({
  state () {
    return {
      count: 0,
      user: {}
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    increment (state) {
      state.count++
    }
  }
})
