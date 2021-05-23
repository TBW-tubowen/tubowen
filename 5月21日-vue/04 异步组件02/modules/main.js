import Vue from 'vue';
// 引入App
import App from './App';

// 第二种方式
// const Xxoo = () => import('./Xxoo');
// Vue.component('Xxoo', Xxoo);

// 简写
Vue.component('Demo', () => import('./Demo'))

// 动态
let name = 'Xxoo';
Vue.component('Xxoo', () => import(`./${name}`));

// 构建应用
const app = new Vue({
    // 提供了render方法
    render: h => h(App)
    // 上树
}).$mount('#app');