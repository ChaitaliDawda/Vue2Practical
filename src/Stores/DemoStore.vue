<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'text 1', done: true },
      { id: 2, text: 'text 2', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    }
  },
  actions: {
    incrementCount ({commit}, value) {
      console.log('here')
      commit('increment', value)
    }
  }
})
</script>
