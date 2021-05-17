import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        flag: 1
    },
    methods: {
        toggle() {
            this.flag = (this.flag + 1) > 4 ? 1: this.flag + 1;
        }
    }
})