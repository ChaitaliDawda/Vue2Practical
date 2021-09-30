const moduleB = {
  namespaced: true,
  state: () => ({
    counts: 0
  }),
  mutations: {
    increment (state) {
      // `state` is the local module state
      state.counts++
    }
  },

  getters: {
    doubleCount (state) {
      return state.counts * 4
    }
  }
}

export default moduleB
