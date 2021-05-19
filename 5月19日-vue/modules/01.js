import Vue from 'vue';
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    // 创建完毕
    created() {
        console.log(this);

        // 订阅消息
        this.$on('demo', (msg, ...args) => {
            console.log('$on', args);
            this.msg = msg;
        })

        // 做一个异步的任务， 2秒后触发
        setTimeout(() => {
            // 触发消息
            this.$emit('demo', 1, 2, 3, 4);
        }, 2000);
    },
    methods: {
        xxoo() { 
            console.log('xxoo', arguments);
        }
    }
})