<template>
  <div class="custom-topping">
      <h2>Add your own topping</h2>
      <form @submit.prevent="handleSubmit">
          <label for="custom">
            <input type="text" v-model="customTopping" name="custom" placeholder="Add your own">
          </label>
          <input type="submit" title="Submit" class="btn-submit">
      </form>
  </div>
</template>
<script>
import store from '../store'

export default {
  name: 'CustomTopping',
  data() {
      return {
          customTopping: null,
      }
  },
  methods: {
      handleSubmit() {
          if (this.customTopping !== null) {
            store.commit('addTopping', this.customTopping);
            this.customTopping = null;
          }
      }
  }
}
</script>
<style>
input {
  font-size: 28px;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(1, 1, 1, .1);
  text-indent: 10px;
  margin-bottom: 40px;
}
input:focus {
    outline: none;
}
.btn-submit {
    text-indent: 0;
    padding: 10px 30px;
}
.btn-submit:hover {
    cursor: pointer;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in;
}
</style>

