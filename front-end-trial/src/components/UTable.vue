<template>
  <table>
    <tr>
      <th v-for="heading in headers">
        {{ heading }}
      </th>
    </tr>
    <tr v-for="item in rows">
      <product-item></product-item>
    </tr>
  </table>
</template>
<script>
  export default {
    name: 'u-table',
    props: {
      headers: Array,
      rows: Object,
    },
  };
</script>
<style lang="scss" scoped>

</style>
