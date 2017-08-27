<template>
  <div id="app">
    <section class="header">
      <h1 class="title">Products</h1>
      <u-button text="Add Product" @click="showAddProductModal"></u-button>
    </section>
    <section class="products-container">
      <products></products>
    </section>
    <add-product-modal v-show="displayAddProductModal" :close="closeAddProductsModal"></add-product-modal>
  </div>
</template>

<script>
import UButton from './components/UButton';
import Products from './components/Products';
import AddProductModal from './components/ProductModal';

export default {
  components: {
    UButton,
    Products,
    AddProductModal,
  },
  name: 'app',
  data() {
    return {
      displayAddProductModal: false,
    };
  },
  methods: {
    showAddProductModal() {
      this.displayAddProductModal = true;
    },
    closeAddProductsModal() {
      this.displayAddProductModal = false;
    },
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto auto;
  max-width: 1024px;

}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  text-align: left;
}
</style>
