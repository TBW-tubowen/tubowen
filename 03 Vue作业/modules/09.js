import Vue from 'vue';

const child = Vue.extend({

    // 接收消息
    // 1、数据类型为数组，数组里面为接收的属性名称，名称使用驼峰命名法
    // props: ['name', 'msg', 'parentMsg'],

    // 2、属性值为对象
    props: {
        // ket就是你要接收的属性名，value值有三种情况
        // 1、value值为系统构造函数
        name: Number, // 进行类型约束
        // 2、value值为数组
        msg: [String, Number],
        // 3、value值为对象
        parentMsg: {
            // type属性修饰类型
            type: Number | String,
            // 默认值
            // default: '默认值',
            // default: () => 'i love you'
            default() {
                return 'i miss you'
            },
            // 必传项
            required: true,
            // 验证器
            validator(value) {
                // console.log(arguments);
                return value.length >= 5;
            }
        }
    },
    
    template: `
    <div>
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
        <h3>{{parentMsg}}</h3>
    </div>
    `,
    data() {
        return {
           
        }
    },
    created() {
        console.log(this);
    }
})

let app = new Vue ({
    el: '#app',
    data: {
        msg: '我爱你'
    },
    components: {
        child
    }
})