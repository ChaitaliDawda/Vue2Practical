<template>
  <div class="hello">
    <ol>
      <li v-for="(ol, index) in orderList" :key="ol.id">
          {{index}} -  {{ol.text}}
          <br>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TestRouter',
  data () {
    return {
      orderList: [
        {text: 'text1'},
        {text: 'text2'}
      ]
    }
  },
  methods: {
  }
}
</script>
