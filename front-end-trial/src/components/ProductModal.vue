<template>
  <div>
    <u-modal :close="close">
      <div slot="title">Add Product</div>
      <u-button slot="cta" text="Save" @click="addProduct" v-show="!options"></u-button>
      <u-button slot="cta" text="Update" @click="updateProduct" v-show="options"></u-button>
      <div slot="content" class="content">
      <form>
        <div class="input-container">
          <label for="productName">
            <div class="input-label">
              Name
            </div>
            <input type="text" name="productName" v-model="productName" autofocus>
          </label>
        </div>
          <div class="type-selection">
            <div class="type-label">
              Type
            </div>
            <label for="physical" class="radio-label">
              <input type="radio" name="type" value="physical" v-model="productType">
              <div class="radio-label-text">
                Physical
              </div>
            </label>
            <label for="digital" class="radio-label">
              <input type="radio" name="type"  value="digital" v-model="productType">
              <div class="radio-label-text">
                Digital
              </div>
            </label>
            <label for="service" class="radio-label">
              <input type="radio" name="type" value="service" v-model="productType">
              <div class="radio-label-text">
                Service
              </div>
            </label>
          </div>
        <div class="input-container">
          <label for="productPrice">
            <div class="input-label">
              Price
            </div>
            <input type="text" name="productPrice" v-model="productPrice">
          </label>
        </div>
        <div class="input-container">
          <label for="productInventory">
            <div class="input-label">
              Inventory
            </div>
            <input type="text" name="productInventory" v-model="productInventory">
          </label>
        </div>
        </form>
        <div class="saving" v-show="saving">Saving...</div>
      </div>
    </u-modal>
  </div>
</template>
<script>
  import store from '../store';
  import UButton from './UButton';
  import UModal from './UModal';
  import ProductAPI from '../api/products';

  export default {
    name: 'add-product-modal',
    components: {
      UButton,
      UModal,
    },
    props: {
      close: Function,
      options: Object,
    },
    methods: {
      addProduct() {
        const self = this;
        this.saving = true;
        const payload = {
          name: this.productName,
          price: this.productPrice,
          inventory: this.productInventory,
          type: this.productType,
        };
        ProductAPI.addProduct(payload).then((res) => {
          store.commit('add', res.data);
          self.close();
        });
      },
      updateProduct() {
        const self = this;
        this.saving = true;
        const payload = {
          id: this.options.id,
          name: this.productName,
          price: this.productPrice,
          inventory: this.productInventory,
          type: this.productType,
        };
        ProductAPI.updateProduct(payload).then((res) => {
          window.console.log(res.data);
          store.commit('remove', res.data.id);
          store.commit('add', res.data);
          self.close();
        });
      },
    },
    data() {
      return {
        productName: '',
        productPrice: '',
        productInventory: '',
        productType: null,
        saving: false,
      };
    },
    mounted() {
      if (this.options) {
        this.productName = this.options.name;
        this.productType = this.options.type;
        this.productInventory = this.options.inventory;
        this.productPrice = this.options.price;
      }
    },
  };
</script>
<style lang="scss" scoped>
  form {
    color: #89949F;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
  }
  .modal
  .type-selection {
    margin: 10px 0;
    font-size: 12px;
    .type-label {
      text-align: left;
      font-size: 12px;
      margin-bottom: 4px;
    }
    .radio-label {
      display: flex;
      width: 100%;
      input {
        width: 24px;
        margin: 0;
        padding: 0;
        height: 30px;
      }
      .radio-label-text {
        height: 24px;
        line-height: 34px;
      }
    }
  }
  .input-container {
    width: 100%;
    margin: 10px 0;
    input {
      width: calc(100% - 15px);
      font-size: 14px;
      display: block;
      height: 22px;
      border-radius: 2px;
      border: 1px solid #E8E9EA;
      padding-left: 12px;
    &:focus {
       outline: none;
       border-color: #5DAEFF;
     }
    }
  }
  .input-label {
    text-align: left;
    font-size: 12px;
    margin-bottom: 4px;
  }
</style>
