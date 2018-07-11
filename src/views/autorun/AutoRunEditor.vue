<template>
  <div>
    <h1>this is a web editor</h1>
    <div class="container w100">
      <label for="editor"></label>
      <textarea id="editor" class="h100 w40 fl border"></textarea>
      <iframe id="result" class="h100 w40 fr border"></iframe>
    </div>
    <div class="run w100 fixed">
      <button class="btn" >运行</button>
    </div>
  </div>
</template>

<script>
  import 'static/css/simple/simple.css'

  import run from 'static/js/common/common.js'
  export default {
    name: 'AutoRunEditor',
    created: function () {
      this.$nextTick(function () {
        this.runTimer()
      })
    },
    mounted: function () {
      // addEventListener here
      // let self = this
      // window.addEventListener('keydown', function () {
      //   console.log('键盘事件')
      //   self.$nextTick(function () {
      //     self.runTimer()
      //   })
      // })
    },
    methods: {
      runTimer: function () {
        run()
        // this.timeOut = setTimeout(alert(123), 10000)
      }
    }
  }
</script>

<style type="text/scss" scoped>

</style>
