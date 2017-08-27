<template>
  <button @click="$emit('click', click)">
    {{ text }}
  </button>
</template>
<script>
  export default {
    name: 'u-button',
    props: {
      text: String,
      click: Function,
    },
  };
</script>
<style lang="scss" scoped>
button {
  min-width: 88px;
  padding: 1px 12px;
  height: 30px;
  background: #0463FA;
  color: white;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
}
</style>
