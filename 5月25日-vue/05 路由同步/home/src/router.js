// 引入路由
import Router from 'vue-router';
import Vue from 'vue';
import Home from '@/views/Home';
import About from '@/views/About';

// 安装
Vue.use(Router);

// 定义路由规则
const routes = [
    { path: '/', component: Home },
    { path: '/About', component: About }
]

// 获得路由对象
const router = new Router({
    routes,
    mode: 'history'
});

// 暴露接口
export default router;