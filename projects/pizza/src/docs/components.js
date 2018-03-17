const docs = [
    {
        filename: 'App.vue',
        description: 'Contains all major components',
    },
    {
        filename: 'Pizza.vue',
        description: 'Pizza container, only reads toppings from Vuex\'s store',
    },
    {
        filename: 'Toppings.vue',
        description: 'Wrapping container to easily iterate over list of toppings',
    },
    {
        filename: 'Topping.vue',
        description: 'A single topping, talks to Vuex\'s store to update status of each topping',
    },
    {
        filename: 'AddedTopping.vue',
        description: 'A read-only property that shows the topping on the pizza',
    },
    {
        filename: 'CustomTopping.vue',
        description: 'Form container to submit a custom topping',
    },
    {
        filename: 'Submission.vue',
        description: 'Allows submitting, right now only shows a windw alert',
    },
    {
        filename: 'store.js',
        description: 'An all in one place Vuex store, in a larger app this store would be split into multiple files',
    },
]
export default {
    docs
}