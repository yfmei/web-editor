<template>
  <div id="app">
    <router-view v-show="false"/>
    <AutoRunEditor/>
    <Emmet v-show="false"/>
  </div>
</template>

<script>
  import AutoRunEditor from '@/views/autorun/AutoRunEditor'
  import Emmet from '@/views/emmet/Emmet'

  export default {
    name: 'App',
    components: {Emmet, AutoRunEditor}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
