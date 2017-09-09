<template lang="html">
  <div class="card-wrapper">
    {{ title }}
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["title"]
};
</script>

<style lang="scss">
.card-wrapper {
  min-width: 200px;
  min-height: 100px;
  padding: 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 30px rgba(12, 23, 34, 0.1);
  margin: 0 20px;
  color: #0074D9;
  position: relative;
  overflow: hidden;
  text-align: center;
}
</style>
