<template>
  <div id="app">
    <HelloWorld />
<!--    <editormd/>-->
    <test-mk v-if="false"/>
    <outline-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Editormd from "@/components/editormd";
import testMk from '@/components/test'
import OutlineView from "@/components/outlineView";
export default {
  name: 'App',
  components: {
    OutlineView,
    // Editormd,
    HelloWorld,
    testMk
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
