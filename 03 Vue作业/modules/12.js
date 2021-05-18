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
        this.$on('sy102', (...args) => {
            console.log(111, args);
        })
        this.$emit('sy102', this.msg, '我是子组件传递的内容');
    },
    // 数据监测
    watch: {
        msg(value) {
            console.log(value, 123);
            console.log(arguments);
            this.$emit('sy102', this.msg);
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
        // console.log(this);
        // // 添加自定义事件
        // this.$on('sy102', (...args) => {
        //     // this.msg = msg;
        //     this.demo(...args);
        // })
    },
    methods: {
        demo(msg) {
            // console.log(arguments);
            this.msg = msg;
        }
    }
})