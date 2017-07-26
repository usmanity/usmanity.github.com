<template>
  <div id="app" class="container">
    <popular></popular>
    <search></search>
  </div>
</template>

<script>
import Popular from './components/Popular'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Popular,
    Search
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  min-width: 480px;
  width: 80%;
  margin: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
