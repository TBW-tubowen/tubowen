// 创建服务器
const express = require('express');

// 引入ejs
const ejs = require('ejs');

// 引入fs
const fs = require('fs');

// 引入vue的应用
const vueApp = require('./vue');

// 构建应用
const app = new express();

// 引用服务器渲染器插件
const { createRenderer } = require('vue-server-renderer');

// 创建渲染器
const render = new createRenderer({
    // 可以设置html模板
    template: fs.readFileSync('./views/vue.html', 'utf-8')
})



// 更改ejs后缀
app.engine('.html', ejs.__express);

// 静态化一个目录
app.use('/static/', express.static('./static'))
// app.use( express.static('./views'))

// 渲染页面
app.get('/', (req, res) => {
    // 渲染指定页面
    // res.render('index.ejs');
    // res.render('index.html');
    render.renderToString(vueApp)
        .then(result => res.end(result))
        .catch(err => console.log(222, err))
})

// 设置监听端口
app.listen(3000, () => {
    console.log('server is start');
})