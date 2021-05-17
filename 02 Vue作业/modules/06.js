import Vue from 'vue';
import '../scss/06.scss';

let app = new Vue({
    el: '#app',
    data: {
        color: ['black', 'black', 'black'],
        cursor: ['pointer', 'pointer', 'pointer']
    },
    // 方法
    methods: {
        // 图片边框
        imgClick(index) {
            let arr = ['black', 'black', 'black'];
            arr[index] = 'red';
            this.color = arr;
            if (index == 0) {
                this.cursor = ['pointer', 'pointer', 'pointer']
            } else if (index == 1) {
                this.cursor = ['not-allowed', 'pointer', 'pointer'];
            } else {
                this.cursor = ['not-allowed', 'not-allowed', 'pointer']
            }
        }
    }
})