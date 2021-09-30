<template>
  <div class="hello">
    <router-link to = "/testRouter">Click on Router Link 1</router-link>
    <h1>{{ msg }}</h1>
    <div v-bind:title='textName'>Mouse hover here...</div>
    <TestChild
    v-for="course in orderList"
      v-bind:todo="course"
      v-bind:key="course.id"/>
    <input v-model="message" v-focus>
    <button v-bind:style="btnStyle" @click="reverseMessage"
    @mouseover="changeColor('over')"  @mouseout="changeColor('out')">
    Click Here to Reverse Message</button>
    <div>{{outPut}}</div>
    <component v-bind:is = "view"></component>
    <div >{{fullMessages | countletters}}</div>

    <button v-on:click = "show = !show">Click Here</button>
    <transition name = "fade">
      <p v-show = "show">This is a Fade Transition Example</p>
    </transition>
    <button @click="hello">Click to test mixin</button>

    <renderDemo :elementtype = "'div,red,25,div1'">hii</renderDemo>

    <div>{{product}}</div>

    <!-- <div>{{DemoStore}}</div> -->
  </div>
</template>

<script>
import TestChild from './TestChild'
import myMixin from './mixinsTest.vue'
import renderDemo from './renderDemo'
import Vue from 'vue'
import DemoStore from './../Stores/DemoStore.vue'
import MainStore from './../Stores/MainStore.vue'

var myproduct = {id: 1, name: 'shirt', price: '1000.00'}

export default {
  name: 'HelloWorld',
  components: {
    renderDemo,
    TestChild,
    'component1': {
      template: '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>'
    }
  },
  data () {
    return {
      show: true,
      msg: 'Welcome to Your Vue.js App',
      textName: 'Test Vue',
      orderList: [
        {text: 'text1'},
        {text: 'text2'}
      ],
      message: 'hi...',
      outPut: '',
      view: 'component1',
      btnStyle: {
        backgroundColor: 'gray'
      },
      product: myproduct
    }
  },
  computed: {
    fullMessages: function () {
      return this.msg + ' ' + this.message
    }
  },
  methods: {
    reverseMessage: function (event) {
      console.log(event)
      this.hello()
      this.outPut = this.message
    },
    changeColor: function (value) {
      if (value === 'over') {
        this.btnStyle.backgroundColor = 'red'
      } else {
        this.btnStyle.backgroundColor = 'yellow'
      }
    },
    hello: function () {
      console.log('hello from hello word!')
    }
  },
  directives: {
    focus: {
    // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },
  filters: {
    countletters: function (value) {
      return value.length
    }
  },
  store: {
    DemoStore,
    MainStore
  },
  mixins: [myMixin],
  provide () {
    return {
      userName: this.textName
    }
  },
  created: function () {
    this.product.qty = '1'
    Vue.set(this.product, 'NewText', 1)

    console.log(myproduct)

    setTimeout(() => {
      Vue.delete(myproduct, 'price')
    }, 10000)

    console.log(DemoStore.state.count)
    DemoStore.commit('increment', 5)
    console.log(DemoStore.state.count)

    console.log('Todo List count: ' + DemoStore.getters.doneTodos.length)

    console.log('Using action')
    DemoStore.dispatch('incrementCount', 10)
    console.log(DemoStore.state.count)

    console.log(MainStore.state.a.count)

    console.log(MainStore.state.count)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
