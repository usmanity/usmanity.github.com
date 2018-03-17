<template>
    <div>
        <h2>Select your toppings</h2>
        <ul class="toppings">
            <Topping 
                v-for="topping of allToppings"
                :key="topping.name"
                class="topping"
                :topping="topping"
            />
        </ul>
    </div>
</template>
<script>

import _ from 'lodash'
import Topping from './Topping'
import store from '../store'

export default {
    name: 'Toppings',
    components: {
        Topping,
    },
    data() {
        return {
            allToppings: null,
        }
    },
    methods: {
        getAllToppings () {
            this.allToppings = store.getters.toppings;
        },
    },
    mounted() {
        this.getAllToppings();
    }
}
</script>
<style scoped>
.toppings {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.topping {
    text-transform: capitalize;
    list-style: none;
    padding: 10px 30px;
    margin: 20px;
    border: 1px solid blue;
    border-radius: 10px;
}
.topping:hover {
    cursor: pointer;
    box-shadow: 0 0 3px rgba(90, 90, 90, 0.5);
}
</style>

