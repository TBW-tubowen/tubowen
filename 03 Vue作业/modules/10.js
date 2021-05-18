import Vue from 'vue';

const child = Vue.extend({

    // 接收消息
    // 1、数据类型为数组，数组里面为接收的属性名称，名称使用驼峰命名法
    props: ['name', 'msg', 'parentMsg'],

   
    // 模板
    template: `
    <div>
        <h1>子组件</h1>
        <h2>{{$parent.msg}}</h2>
        <h3>{{title}}</h3>
    </div>
    `,
    data() {
        return {
           
        }
    },
    created() {
        // console.log(this);
        this.title = this.$parent.msg.toUpperCase();
    }
})

let app = new Vue ({
    el: '#app',
    data: {
        msg: '我爱你aaa'
    },
    components: {
        child
    }
})