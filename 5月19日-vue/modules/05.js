import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    props: ['demo'],
    // 模板
    template: '#child',
    // 模型
    data() {
        return {
            msg: 'child component'
        }
    },
    // 创建完毕
    created() {
        // 调用父组件的方法
        this.demo(this.msg)
    },
    // 检测数据变化
    watch: {
        msg() {
            // 调用父组件的方法
            this.demo(this.msg);
        }
    }
})
// 声明另一个组件
const other = Vue.extend({
    props: ['title'],
    // 模板
    template: '#other',
    created() {
        console.log(this);
        this.msg = this.title;

    },
    data() {
        return {
            msg: ''
        }
    },
    watch: {
        title() {
            this.msg = this.title;
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        msg: 'parent msg'
    },
    components: {
        child,
        other
    },
    methods: {
        xxoo(msg) {
            this.msg = msg;
        }
    }
})