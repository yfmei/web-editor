<template>
  <div>
    <h1>this is a web editor</h1>
    <div class="container w100">
      <textarea id="editor" class="h100 w40 fl border"></textarea>
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
    name: 'TextareaEditor'
  }
</script>

<style type="text/scss" scoped>

</style>
