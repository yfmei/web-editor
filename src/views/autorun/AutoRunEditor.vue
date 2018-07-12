<template>
  <div>
    <h1>this is a web editor</h1>
    <div class="container w100">
      <textarea id="editor" class="h100 w40 fl border" title=""></textarea>
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
    data() {
      return {
        htmlCode: ''
      }
    },
    mounted: function () {
      // addEventListener and manage dom here
      let self = this
      window.addEventListener('keydown', function () {
        console.log('键盘事件')
        self.$nextTick(function () {
          self.runTimer()
        })
      })
    },
    methods: {
      runTimer: function () {
        let self = this
        run(self.htmlCode, function (val) {
          // 更新成功, 覆盖全局变量
          self.htmlCode = val
        })
      }
    }
  }

</script>

<style type="text/scss" scoped>

</style>
