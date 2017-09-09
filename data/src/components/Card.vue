<template lang="html">
  <div class="card-wrapper">
    <div class="bg-artifact">
      {{ background }}
    </div>
    <h1> {{ title }}</h1>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["background", "title"]
};
</script>

<style lang="scss">
.card-wrapper {
  min-width: 200px;
  min-height: 200px;
  padding: 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 30px rgba(12, 23, 34, 0.1);
  margin: 0 20px;
  color: #0074D9;
  position: relative;
  overflow: hidden;
}
.bg-artifact {
  position: absolute;
  font-size: 100px;
  font-weight: bold;
  color: rgba(200, 200, 200, 0.1);
  bottom: -30px;
    right: -10px;
}
</style>
