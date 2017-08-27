<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-top">
        <div class="close-container" @click="closeModal" v-show="showClose">
          <div class="close">x</div>
        </div>
        <slot name="title"></slot>
        <slot name="cta"></slot>
      </div>
      <slot name="content" class="modal-content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'u-modal',
    props: {
      close: Function,
      showClose: {
        required: false,
        type: Boolean,
        default: true,
      },
    },
    methods: {
      closeModal() {
        this.close();
      },
    },
  };
</script>
<style lang="scss" scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
  }
  .modal {
    width: 460px;
    min-height: 300px;
    background-color: white;
    margin: auto;
  }
  .modal-top, .modal-content {
    margin: 10px 20px;
  }
  .modal-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close-container {
    width: 30px;
    border: 1px solid #D4D9DD;
    border-radius: 3px;
    padding: 4px 8px;
    &:hover {
      box-shadow: 0px 2px 1px #D4D9DD;
      cursor: pointer;
      transition: box-shadow 0.3s cubic-bezier(.53,.1,.41,1.07);
     }
  }
</style>
