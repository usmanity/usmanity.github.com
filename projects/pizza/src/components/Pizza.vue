<template>
  <div class="pizza">
    <h1>{{ msg }}</h1>
    <div class="crust">
      <div :class="hasCheese">
        <div class="shown-toppings">
          <added-topping v-for="topping in getToppings" :key="topping.name" :topping="topping" v-if="topping.selected"></added-topping>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import _ from 'lodash'
import AddedTopping from './AddedTopping'

export default {
  name: 'Pizza',
  components: {
    AddedTopping,
  },
  data () {
    return {
      msg: 'Let\'s make some pizza',
    }
  },
  computed: {
    getClass(store, t) {
      return `topping ${t}`;
    },
    getToppings() {
      return store.getters.toppings;
    },
    hasCheese() {
      var hasCheese = _.find(store.getters.toppings, (t) => {
        if (t.name === 'cheese') {
          return t.selected;
        }
      });
      var cheeseClass = hasCheese ? 'cheese' : '';
      return cheeseClass + ' toppings-container';
    }
  }
}
</script>
<style scoped>
.crust {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto;
  border: 21px solid #D2AE7E;
  box-shadow: inset 0px 0px 7px #edd6a6;
  box-shadow: 0px 0px 7px #edd6a6;
  background-color: #EDD5A6;
  display: flex;
  align-items: center;
}
.toppings-container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto;
}
.cheese {
  background-color: #FCDC43;
}
.topping {
  width: 30px;
  height: 30px;
  border: 1px solid;
  position: relative;
  left: 20px;
  top: 30px;
}
.shown-toppings {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
}

</style>
