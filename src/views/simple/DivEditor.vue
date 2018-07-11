<template>
  <div>
    <h1>this is a web editor by contenteditable div</h1>
    <div class="container w100">
      <div id="editor" class="h100 w40 fl border" contenteditable="true"></div>
      <iframe id="result" class="h100 w40 fr border"></iframe>
    </div>
    <div class="run w100 fixed">
      <button class="btn" onclick="run()">运行</button>
    </div>
  </div>

</template>

<script>
  import 'static/css/simple/simple.css'

  export default {
    name: 'DivEditor'
  }
</script>

<style type="text/scss" scoped>

</style>
