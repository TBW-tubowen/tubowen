import Vue from 'vue';
// 引入App
import App from './App';

// 全局混合 -- 继承
Vue.mixin({
    xxoo: 'ooxx',
    say() {
        console.log('i can say');
    },
    data() {
        return {
            num: 12,
            msg: 'mixin'
        }
    },
    created() {
        this.num = 14;
        console.log('this is main mixin', this);
    }
})

// 构建应用
const app = new Vue({
    // 提供了render方法
    render: h => h(App)
    // 上树
}).$mount('#app');