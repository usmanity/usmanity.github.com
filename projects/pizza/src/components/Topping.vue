<template>
  <li @click="toggleTopping()" :class="getClass">
      {{ topping.name }}
  </li>
</template>
<script>
import store from '../store'
import _ from 'lodash'

export default {
  name: 'Topping',
  props: {
      topping: {
          type: Object,
          required: true,
      },
  },
  data() {
      return {
        // selected: store.getters.topping,
      }
  },
  computed: {
      getClass() {
          return this.topping.selected ? 'topping selected' : 'topping';
      }
  },
  methods: {
      toggleTopping () {
          if (this.topping.selected) {
              this.removeTopping();
          } else {
              this.addTopping();
          }
      },
      addTopping() {
          store.commit('addTopping', this.topping.name);
      },
      removeTopping() {
          store.commit('removeTopping', this.topping.name);
      },
  },
}
</script>
<style scoped>
.topping {
    transition: background-color 1s;
}
.topping.selected {
    background-color: rgba(100, 100, 200, 0.9);
    color: white;
}

</style>

