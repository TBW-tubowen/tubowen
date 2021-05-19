import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    // 接收方法
    props: ['demo'],
    // 模板
    template: `
        <div>
            <h1>child part</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    // 模型
    data() {
        return {
            msg: 'child component'
        }
    },
    // 创建完毕
    created() {
        console.log(this.demo);
        // 通过调用方法传递参数
        this.demo(this.msg);
    }
})

const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    // 注册子组件
    components: {child},
    // 创建方法
    methods: {
        xxoo(msg) {
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }

})