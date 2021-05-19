import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
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
        // 1、利用$parent属性直接给父组件进行赋值
        // this.$parent.msg = 'child msg';

        // 2、利用事件的触发
        this.$parent.$emit('demo', this.msg);
    }
})

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
    },
    components: {
        child
    }
})