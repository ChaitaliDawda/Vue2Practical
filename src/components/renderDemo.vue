<script>
export default {
  render: function (createElement) {
    var a = this.elementtype.split(',')
    return createElement(a[0], {
      attrs: {
        id: a[3],
        style: 'color:' + a[1] + ';font-size:' + a[2] + ';'
      }
    },
    this.$slots.default
    )
  },
  props: {
    elementtype: {
      attributes: String,
      required: true
    }
  }
}
</script>
<style>
</style>
