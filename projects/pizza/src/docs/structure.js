const structure = [
    {
        type: 'Overall',
        description: `The app passing information around using the Vuex store, 
this saves issues where different components are setting or getting the same piece of information`,
    },
    {
        type: 'Store',
        description: `All changes to the store can only happen through mutations which are done using
store.commit('mutation')`,
    },
    {
        type: 'CSS',
        description: 'All CSS is stored within the component its styling.',
    },
    {
        type: 'Images',
        description: 'Images live inside /src/assets, these get copied over by the build process',
    },
];

export default {
    docs: structure
}