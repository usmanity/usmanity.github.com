var app = new Vue({
    el: '#app',
    data: {
        hInput: null,
        sInput: null,
        lInput: null,
        colors: {
            h: null,
            s: null,
            l: null,
        }
    },
    methods: {
        updateColor(j) {
            if (j.keyCode === 38) {
                // go up
                this.colors.h++; 
            } else if (j.keyCode === 40) {
                // go down
                this.colors.h--; 
            }
            console.log(this.colors.h);
        }
    },
    created() {
        console.log('yo we here');
    }
})