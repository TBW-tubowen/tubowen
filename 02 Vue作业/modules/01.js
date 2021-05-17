import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    // 定义方法
    methods: {
        say() {
            console.log('this is say');
        },
        demo() {
            console.log(' this is demo')
        },
        xo(...args) {
            console.log(args);
        }
    }
})

console.log(app);