import Vue from 'vue';
console.log(Vue);
import * as Demo from './demo';
console.log(Demo);
import './xxoo.scss';
import './xxoo.less';
// 获得app
let app = new Vue({
    // 绑定视图
    el: '#app',
    // 绑定数据
    data: {
        title: 'es6-vue'
    }
})
