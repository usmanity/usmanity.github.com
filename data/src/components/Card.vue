<template lang="html">
  <div class="card-wrapper">
    <div class="background">
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
  border: 1px solid red;
  min-width: 200px;
  min-height: 200px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
</style>
