<template>
  <div>
    <table>
      <tr>
        <th v-for="heading in headers" @click="sort(heading, sorted)" :sortStatus="sorted">
          {{ heading }}
          <span class="sort-icon sorted-asc" v-show="heading == sortedBy && sorted == 'desc'">&#x25B2;</span>
          <span class="sort-icon sorted-desc" v-show="heading == sortedBy && sorted == 'asc'">&#x25BC;</span>
        </th>
      </tr>
      <tr v-for="item in allProducts" class="items"  @click.prevent="edit(item)">
        <td class="item-name">
          <img :src="item.thumbnail">
          <div class="name">
            {{ item.name }}
          </div>
        </td>
        <td>
          {{ item.type }}
        </td>
        <td>
          {{ toCurrency(item.price) }}
        </td>
        <td class="inventory">
          <span class="inventory-count">
            {{ item.inventory }}
          </span>
          <span class="row-actions">
            <a href="#" @click.prevent="edit(item)" class="edit"></a>
            <a href="#" class="copy"></a>
            <a href="#" @click.prevent="deleteItem($event, item)" class="delete"></a>
          </span>
        </td>
      </tr>
    </table>
    <div v-if="showEditModal">
      <a-p-m :close="closeEditModal" :options="editOptions"></a-p-m>
    </div>
    <div v-if="showConfirmDeleteModal" class="delete-modal">
      <u-modal :showClose="false">
        <div slot="title" class="delete-modal-close">Are you sure?</div>
        <div slot="content" class="delete-modal-content">
          <p>
            Cupcake ipsum dolor sit amet lemon drops gummies carrot cake.
            Topping cotton candy oat cake toffee liquorice.
            Gingerbread jelly beans sugar plum oat cake gummies.
          </p>
          <div class="buttons">
            <u-button text="Cancel" @click="hideConfirmDeleteModal" class="cancel-button"></u-button>
            <u-button text="Delete Product" @click="deleteConfirmed" class="continue-button"></u-button>
          </div>
        </div>
      </u-modal>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import store from '../store';
  import ProductsApi from '../api/products';
  import APM from './ProductModal';
  import UButton from './UButton';
  import UModal from './UModal';

  export default {
    name: 'products',
    components: {
      APM,
      UModal,
      UButton,
    },
    data() {
      return {
        headers: [
          'name',
          'type',
          'price',
          'inventory',
        ],
        sortedBy: null,
        sorted: 'desc',
        allProducts: store.state.products,
        showEditModal: false,
        editOptions: {},
        showConfirmDeleteModal: false,
        itemToDelete: null,
      };
    },
    methods: {
      getProducts() {
        ProductsApi.fetchAllProducts().then((res) => {
          for (let p = 0; p < res.data.length; p += 1) {
            if (res.data) {
              store.commit('add', res.data[p]);
            }
          }
        });
      },
      toCurrency(value) {
        const usdCost = parseFloat(value).toFixed(2).toString();
        return `$ ${usdCost}`;
      },
      sort(column, order) {
        this.sortedBy = column;
        if (order === 'desc') {
          this.sorted = 'asc';
        } else {
          this.sorted = 'desc';
        }
        this.allProducts = _.orderBy(this.allProducts, column, order);
      },
      edit(item) {
        this.editOptions = item;
        this.showEditModal = true;
      },
      closeEditModal() {
        this.showEditModal = false;
      },
      deleteItem(event, item) {
        event.stopPropagation();
        this.itemToDelete = item;
        this.showConfirmDeleteModal = true;
      },
      hideConfirmDeleteModal() {
        this.showConfirmDeleteModal = false;
        this.itemToDelete = null;
      },
      deleteConfirmed() {
        store.commit('remove', this.itemToDelete.id);
        this.showConfirmDeleteModal = false;
      },
    },
    mounted() {
      this.getProducts();
    },
  };
</script>
<style lang="scss" scoped>
  /***
    for some reason, PHPStorm can't format scss inside Vue files 😭
   ***/

  table {
    width: 100%;
    border-collapse: collapse;
  tr {
    text-align: left;
    font-size: 14px;
    &.items {
      box-sizing: border-box;
      color: #8B7386;
      border-bottom: 1px solid #F0F1F3;
      height: 50px;
    }
    &:hover {
      background-color: #F8F9FA;
      td {
          .inventory-count { display: none }
          .row-actions { display: flex; }
      }
    }
  }
  td {
    .item-name {
      min-width: 200px;
    }
    img, .name {
      float: left;
    }
    .name {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin-left: 6px;
    }
    img {
      margin: 0 10px;
    }
    &.inventory {
      width: 200px;
    }
    &.inventory-count,
    &.row-actions {
      width: 200px;
    }
  }
  th {
    font-weight: normal;
    text-transform: capitalize;
    background-color: #F8F9FA;
    height: 40px;
    border: none;
    border-bottom: 1px solid #F1F2F4;
      &:first-of-type {
        padding-left: 20px;
      }
    }
    &:hover {
      cursor: pointer;
     }
  }
  .row-actions {
    display: none;
  }
  .sort-icon {
    font-size: 10px;
  }
  .delete-modal-content {
    margin-top: 30px;
  }
  .edit, .copy, .delete {
    width: 16px;
    height: 16px;
    margin: 4px 10px;
    display: block;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .copy {
    background-image: url('../assets/copy.svg');
  }
  .edit {
    background-image: url('../assets/edit.svg');
  }
  .delete {
    background-image: url('../assets/trash.svg');
  }
  .delete-modal-close {
    width: 100%;
    font-weight: bold;
    margin: 10px 20px;
  }
  .cancel-button, .continue-button {
    font-size: 14px;
    width: 160px;
    height: 36px;
    margin: 20px 5px;
  }
  .cancel-button {
    background-color: white;
    color: #90A5AE;
    border: 1px solid #E0E3E6;
  }
  .continue-button {
    background-color: #FE3A31;
  }
</style>
