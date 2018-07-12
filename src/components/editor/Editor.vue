<template>
  <textarea id="editor" v-model="example" class="h100 w40 fl border" title=""></textarea>
</template>

<script>
  import 'static/css/simple/simple.css'

  import emmet from 'static/js/common/emmet.js'
  export default {
    name: 'Editor',
    props: {
      'height': {
        type: Number,
        default: 500
      },
      'width': {
        type: Number,
        default: 500
      },
      'example': {
        type: String,
        default: 'html:5>div#page>div#header>ul.navigation>li*4>a'
      }
    },
    mounted: function () {
      emmet.require('textarea').setup({
        pretty_break: true, // enable formatted line breaks (when insertingbetween opening and closing tag)
        use_tab: true // expand abbreviations by Tab key
      })
    }
  }
</script>

<style type="text/scss" scoped>

</style>
