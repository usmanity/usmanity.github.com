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
    watch: {
        hInput(value, type, type2) {
            console.log(value);
            console.log(type);
            console.log(type2);
            while (this.colors.h < 360) {
                this.colors.h = value; 
            }
        }
    },
    created() {
        console.log('yo we here');
    }
})