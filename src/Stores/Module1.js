const ModuleA = {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    increment (state) {
      // `state` is the local module state
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}

export default ModuleA
