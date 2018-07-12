<template>
  <div>
    <h1>this is a web editor</h1>
    <div class="container w100">
      <Editor/>
      <Preview/>
    </div>
    <div class="run w100 fixed">
      <button class="btn" >运行</button>
    </div>
  </div>
</template>

<script>

  import run from 'static/js/common/common.js'
  import Preview from '@/components/editor/Preview'
  import Editor from '@/components/editor/Editor'

  export default {
    name: 'AutoRunEditor',
    components: {Editor, Preview},
    data() {
      return {
        userCode: '',
        editor: '',
        displayer: ''
      }
    },
    mounted: function () {
      // addEventListener and manage dom here
      let self = this
      self.editor = document.getElementById('editor')
      self.displayer = document.getElementById('displayer')
      window.addEventListener('keydown', function () {
        console.log('trigger keyboard event')
        self.$nextTick(function () {
          self.run()
        })
      })
    },
    methods: {
      run: function () {
        let self = this
        run(self, function (editContent) {
          // after updated, over
          self.userCode = editContent
        })
      }
    }
  }

</script>

<style type="text/scss" scoped>

</style>
