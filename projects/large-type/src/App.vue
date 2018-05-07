<template>
  <div id="app">
    <LargeType :msg="message" />
    <input type="text" v-model="message">
  </div>
</template>

<script>
import LargeType from './components/LargeType.vue'

export default {
  name: 'app',
  data() {
    return {
      message: null,
    };
  },
  components: {
    LargeType
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
