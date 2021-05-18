import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        msg: '我爱你',
        title: '斑码教育',
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    // 局部定义
    directives: {
        bmShow(el, binding, vnode) {
            if (binding.value) {
                el.style.display = '';
            } else {
                el.style.display = 'none'
            }
        }
    }
})