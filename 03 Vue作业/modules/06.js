import Vue from 'vue';

const sy102 = Vue.extend({
    // 放置的对象和new Vue相同，但是不同点在于el变为了template和data是一个函数，数据为函数的返回值
    // 模板
    template: '#tpl',
    data() {
        return {
            title: '斑码教育',
            name: 'child'
        }
    }
})
// 全局注册组件
// Vue.component('sy102', sy102);

let app = new Vue({
    el: '#app',
    data: {
        msg: '我爱你'
    },
    components: {
        sy102
    }
})