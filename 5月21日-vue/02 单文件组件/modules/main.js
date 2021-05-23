import Vue from 'vue';
// 引入App
import App from './App';
// 构建应用
const app = new Vue({
    // 提供了render方法
    render: h => h(App)
    // 上树
}).$mount('#app');