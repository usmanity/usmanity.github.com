import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    add: (state, product) => {
      state.products.push(product);
    },
    remove: (state, id) => {
      _.remove(state.products, {
        id,
      });
    },
  },
});

