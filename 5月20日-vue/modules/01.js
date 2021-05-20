import Vue from 'vue';
import Router from 'vue-router';

// 安装：vue的家族系列都使用use
Vue.use(Router);

// 创建组件
let first = {
    template: `
        <div>
            <h1>first</h1>
            <h2>name: {{$route.fullPath}}</h2>
        </div>
    `,
}
let second = {
    template: `
        <div>
            <h1>second</h1>
            <h2>id: {{id}}</h2>
        </div>
    `,
    props: ['id']
}
let three = {
    template: `
        <div>
            <h1>three</h1>
            <h2>fullPath: {{fullPath}} --- name: {{name}}</h2>
        </div>
    `,
    props: ['fullPath', 'name']
}

// 创建路由规则
const routes = [
    { 
        path: '/first',
        component: first,
        name: 'first',
    },
    { 
        path: '/second/:id',
        component: second,
        name: 'second',
        // 设置props
        props: true

    },
    { 
        path: '/three',
        component: three,
        name: 'three',
        props(route) {
            let { fullPath, name } = route;
            return { fullPath, name }
        }
    },
    // 重定向
    { path: '/second', redirect: '/second/xxoo' },
    // 默认路由
    { path: '*', component: { template: '<h1>默认路由</h1>', name: 'default' } }
]

// 创建路由对象
const router = new Router({
    // 规则
    routes
})

const app = new Vue({
    el: '#app',
    data: {

    },
    // 注册路由
    router
})