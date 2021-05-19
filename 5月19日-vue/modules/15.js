import Vue from 'vue';
import Router from 'vue-router';

// 1、安装路由
Vue.use(Router);

// 3、定义组件
/* 
    定义组件可以省略 Vue.extend
*/
let first = {
    template: '#first',
    created() {
        console.log('first', this)
    }
}
let second = {
    // 2、在组件中接收
    // props: ['id'],
    props: ['name', 'id', 'fullPath', 'sex', 'hash'],
    template: '#second',
    created() {
        // console.log(this.$route)
    }

}
let three = {template: '<h1>three</h1>'}

// 4、创建路由规则
const routes = [
    // 静态路由规则
    {
        path: '/first',
        component: first,
        name: 'first'
    },
    // 动态路由
    {
        path: '/second/:id',
        component: second,
        name: 'second',
        // 1、定义要传递的数据
        // props: true, // 值为true表示传递只params
        props(route) {
            return {
                name: route.name,
                id: route.params.id,
                fullPath: route.fullPath,
                sex: route.sex,
                hash: route.hash,
            }
        }
    },
    {
        path: '/three',
        component: three,
        name: 'three'
    },
    // 路由重定向
    /* 
     * BUG: 重定向后，路由数据对象解析数据的时候，
     *      将qurey数据，hash数据等，添加给path和params中的动态路由数据
     */
    {
        path: '/second',
        redirect: '/second/demo?name=zhangsan#top'
    },
    // 设置默认路由
    {
        path: '*',
        component: {
            template: '<h1>index</h1>'
        }
    }
]

// 5、创建路由对象
const router = new Router({ routes });

const app = new Vue({
    // 6、注册路由
    router,
    el: '#app',
    data: {

    },
    created() {
        console.log('app', this);
    }
})