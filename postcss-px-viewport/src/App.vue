<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  background-color: #f4f4f4;
}
</style>
