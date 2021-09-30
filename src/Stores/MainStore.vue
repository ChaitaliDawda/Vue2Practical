<script>
import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './Module1'
import moduleB from './Module2'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  modules: {
    a: ModuleA,
    b: moduleB
  },
  state: {
    count: 0
  }
})
</script>
