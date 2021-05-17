import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        sex: 'nv',

        hobby: {
            a: '读书被选中了',
            b: '看报没被选中',
            c: '钓鱼被选中了'
        },
        checks: {
            a: '读书被选中了',
            b: '看报被选中了',
            c: '钓鱼被选中了',
        },
        nochecks: {
            a: '读书没被选中了',
            b: '看报没被选中了',
            c: '钓鱼没被选中了'
        }
    }
})