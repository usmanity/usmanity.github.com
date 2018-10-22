<template>
  <div id="app">
    <Introduction />
    <Calculator />
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Introduction,
    Calculator
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  width: 80%;
  margin: auto;
  margin-top: 60px;
}
p {
  line-height: 1.4em;
}
</style>
