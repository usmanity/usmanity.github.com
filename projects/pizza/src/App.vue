<template>
  <div id="app">
    <Pizza />
    <Toppings />
    <CustomTopping />
    <Submission />
  </div>
</template>

<script>
import Pizza from './components/Pizza'
import Toppings from './components/Toppings'
import Submission from './components/Submission'
import CustomTopping from './components/CustomTopping'
import components from './docs/components'
import structure from './docs/structure'

export default {
  name: 'App',
  components: {
    Pizza,
    Toppings,
    Submission,
    CustomTopping,
  },
  mounted() {
    console.log('%c 🍕', 'font-size: 50px');
    console.log(`%cWelcome to a fake pizza ordering page`,
    'font-size: 16px');
    components.docs.forEach(doc => {
      console.log(`%c${doc.filename}: %c${doc.description}`, 'font-weight: bold; color: rgba(10, 10, 10, 0.99)', 'color: rgba(10, 10, 25, 1)');
    });
    structure.docs.forEach(doc => {
      console.log(`%c${doc.type}: %c${doc.description}`, 'font-weight: bold; color: rgba(10, 10, 10, 0.99)', 'color: rgba(10, 10, 25, 1)');
    })
  },
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  text-align: center;
}
h1 {
  text-align: center;
}
h2 {
  margin: 10px;
}
</style>
