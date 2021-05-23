import Vue from 'vue';
// 引入App
import App from './App';

// 全局混合 -- 继承
Vue.mixin({
    xxoo: 'ooxx',
    data() {
        return {
            num: 12,
            msg: 'mixin'
        }
    },
    created() {
        this.num = 14;
    }
})
// 安装自定义插件 -- vue家族系列 使用use
// 引入插件
import bm from './bm';
// 安装
Vue.use(bm, 1, true, 'string')

// 构建应用
const app = new Vue({
    // 提供了render方法
    render: h => h(App)
    // 上树
}).$mount('#app');