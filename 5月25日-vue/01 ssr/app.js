// 1、引用插件 引用渲染函数
const { createRenderer } = require('vue-server-renderer');
// 引入Vue-commonjs
const Vue = require('vue');

// 创建应用
const app = new Vue({
    template: `
        <div>
            <h1>hello {{msg}}</h1>
        </div>
    `,
    data: {
        msg: 'bm'
    }
})
// 创建渲染器
const render = new createRenderer();

// 渲染，返回一个promise对象

// 将应用程序app传入到渲染器中
render.renderToString(app)
    // success
    .then(res => console.log(111, res))
    // failed
    .catch(err => console.log(err))