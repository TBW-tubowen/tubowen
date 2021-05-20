import Vue from 'vue';
import Router from 'vue-router';
import '../scss/03.scss'

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
            <hr>
            <!-- 子路由的渲染位置 -->
            <router-view></router-view>
        </div>
    `,
    props: ['fullPath', 'name']
}
let threea = {
    template: `
        <div class="a">
            <h1>子路由： three-a</h1>
        </div>
    `,
}
let threeb = {
    template: `
        <div class="b">
            <h1>子路由： three-b</h1>
        </div>
    `,
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
        },
        children: [
            // 相对路径
            { path: 'a', component: threea, name: 'threea' },
            // 绝对路径
            { path: '/b', component: threeb, name: 'threeb' }
        ]
    },
    // 重定向
    { path: '/second', redirect: '/second/xxoo' },
    // 默认路由
    { path: '*', component: { template: '<h1>默认路由</h1>', name: 'default' } }
]

// 创建路由对象
const router = new Router({
    // 规则
    routes,
    // 监测页面的切换
    scrollBehavior(to, from, scrollObj) {
        if (to.name == 'threea') {
            // 设置了滚动条的位置
            return {
                x: 0,
                y: 200
            }
        }
        if (to.name !== 'threea' ) {
            return {
                x: 0,
                y: 0
            }
        }
        // console.log(from)
    },
    // 切换路由的规则
    // mode: 'history',
    mode: 'hash'
})

const app = new Vue({
    el: '#app',
    data: {

    },
    // 注册路由
    router
})