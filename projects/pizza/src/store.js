import Vue from 'vue'
import Vuex from 'vuex'
import toppingsApi from './api/toppings'

Vue.use(Vuex)

const state = {
    toppings: toppingsApi.toppings,
    customToppings: [],
}

const mutations = {
    addTopping (state, topping) {
        var selectedTopping = _.find(state.toppings, (t) => {
            return t.name === topping;
        });
        if (selectedTopping) {
            selectedTopping.selected = true;
        } else {
            state.toppings.push({
                name: topping,
                selected: true,
            })
        }
    },

    removeTopping (state, topping) {
        _.each(state.toppings, (t) => {
            if (t.name == topping) {
                t.selected = false;
            }
        });
    },

    writeTopping (state, topping) {
        state.customToppings.push(topping);
    },
}

const actions = {
    addTopping: ({ commit }) => commit('addTopping'),
    removeTopping: ({ commit }) => commit('removeTopping'),
    writeTopping: ({ commit }) => commit('writeTopping'),
}

const getters = {
    toppings: state => state.toppings,
    customToppings: state => state.customToppings,
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})