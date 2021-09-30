<template>
  <div class="hello">
    <!-- <ol>
      <li v-for="(ol, index) in orderList" :key="ol.id">
          {{index}} -  {{ol.text}}
          <br>
      </li>
    </ol> -->
    <li>{{ todo.text }}</li>
<div>{{userName}}</div>
  </div>
</template>

<script>
export default {
  name: 'TestChild',
  data () {
    return {
    //   orderList: [
    //     {text: 'text1'},
    //     {text: 'text2'}
    //   ]
    }
  },
  props: {
    todo: Object
  },
  methods: {
  },
  inject: ['userName']
}
</script>
