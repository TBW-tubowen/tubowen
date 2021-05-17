import Vue from 'vue';
import '../scss/09.scss';
let app = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {
        // 切换显示状态
        toggle() {
            this.flag = !this.flag;
        }
    }
})