import Vue from 'vue';

const child = Vue.extend({

    // 模板
    template: `
        <div>
            <input type="text" v-model="msg">
            <h1>子组件</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    data() {
        return {
           msg: 'child msg'
        }
    },
    created() {
        // 触发父组件的自定义事件
        this.$parent.$emit('sy102', this.msg, '我是子组件传递的内容');
    },
    // 数据监测
    watch: {
        msg(value) {
            console.log(value);
            this.$parent.$emit('sy102', this.msg);
        }
    }
})

let app = new Vue ({
    el: '#app',
    data: {
        msg: ''
    },
    components: {
        child
    },
    created() {
        console.log(this);
        // 添加自定义事件
        this.$on('sy102', (msg, ...args) => {
            this.msg = msg;
        })
    },
    methods: {
        demo() {
            console.log(arguments);
        }
    }
})