<template>
  <div>
      <button @click="orderPizza()"> 🍕 Order Pizza!</button>
  </div>
</template>
<script>
import store from '../store'
import _ from 'lodash';

export default {
  name: 'Submission',
  methods: {
      orderPizza() {
        let pizzaOrder = store.getters.toppings;
        alert(JSON.stringify(pizzaOrder));
      }
  }
}
</script>
<style scoped>
button {
  font-size: 28px;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(1, 1, 1, .1);
  margin-bottom: 40px;
}
button:hover {
    cursor: pointer;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in;
}
</style>

