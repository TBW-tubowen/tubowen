// 引入vue
import Vue from 'vue';

// 全局声明指令
// Vue.directive('bmHtml', {
//     // 绑定指令
//     bind(el, binding) {
//         console.log(1, 'bind');
//         // console.log(arguments);
//         el.innerHTML = binding.value;
//     },

//     // 页面渲染
//     inserted(el, binding) {
//         console.log(2, 'inserted');
//         el.innerHTML = binding.value;
//     },

//     // 更新数据
//     update(el, binding) {
//         console.log(3, 'update');
//         el.innerHTML = binding.value;
//     },

//     // 更新视图
//     componentUpdated() {
//         console.log(4, 'componentUpdated');

//     },

//     // 解绑
//     unbind() {
//         console.log(5, 'unbind');

//     }
// })

Vue.directive('bmHtml', (el, binding, ...args) => {
    console.log(args);
    console.log(binding.value, binding.oldValue);
    // 通过值的改变，来优化dom操作： 哪个发生改变执行哪一个
    if (binding.value !== binding.oldValue) {
        console.log(el);
        el.innerHTML = binding.value;
    }
})


let app = new Vue({
    el: '#app',
    data: {
        msg: '<a>我爱你</a>',
        title: '斑码教育',
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    directives: {
        bmOnce: {
            bind(el, binding) {
                el.innerHTML = binding.value;
            }
        }
    }
})