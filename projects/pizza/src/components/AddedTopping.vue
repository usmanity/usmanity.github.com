<template>
  <div class="ingredient">
      <div :class="topping.name"></div>
  </div>
</template>
<script>
export default {
  name: 'AddedTopping',
  props: {
      topping: {
          type: Object,
          required: true,
      }
  }
}
</script>
<style scoped>
.ingredient, .ingredient > div {
    width: 100%;
    height: 100%;
    position: absolute;
}
.olives {
  background-image: url('../assets/olives.png');
  background-size: 50%;
  background-position: -30px 90px;
}
.pepperoni {
  background-image: url('../assets/pepperoni.png');
  background-size: 50%;
  background-position: 180px 20px;
}
.mushrooms {
  background-image: url('../assets/mushrooms.png');
  background-size: 40%;
  background-position: 20px 10px;
}
.basil {
  background-image: url('../assets/basil.png');
  background-size: 80%;
  background-position: 90px 100px;
}
</style>
