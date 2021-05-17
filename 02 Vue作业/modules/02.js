import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    // 定义方法
    methods: {
        parent() {
            console.log('this is parent');
        },
        son() {
            console.log(' this is son')
        },
        xo(...args) {
            console.log(args);
        }
    }
})

console.log(app);