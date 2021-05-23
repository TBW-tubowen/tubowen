// 引入vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入组件
import Child from './Child';
// 引入scss文件
import '../scss/01.scss';
// 引入demo组件
import Demo from './Demo';

// 全局注册组件
Vue.component('demo', Demo);

const app = new Vue({
    el: '#app',
    data: {
        msg: '111'
    },
    // 局部注册组件
    components: {
        Child
    }
})