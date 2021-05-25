// 创建服务器
const express = require('express');

// 引入ejs
const ejs = require('ejs');

// 引入fs
const fs = require('fs');

// 构建应用
const app = new express();

// 1、引用服务器渲染器插件  --- createBundleRender
const { createBundleRenderer } = require('vue-server-renderer');

// 2、引入json文件
const bundle = require('./bundle/vue-ssr-server-bundle.json');

// 3、创建渲染器，传递数据
const render = new createBundleRenderer(bundle, {
    // 可以设置html模板 --- 编译后的文件
    template: fs.readFileSync('./view/index.html', 'utf-8')
})

// 更改ejs后缀
app.engine('.html', ejs.__express);

// 静态化一个目录
app.use('/static/', express.static('./static'))
// app.use( express.static('./views'))

// 渲染页面
app.get('*', (req, res) => {
    // 渲染指定页面
    // res.render('index.ejs');
    // res.render('index.html');
    render.renderToString({
        title: 'tubowen',
        msg: '<b>i love you</b>',
        url: req.url
    })
        .then(result => res.end(result))
        .catch(err => {
            res.status(err.status).render('404.html')
        })
})

// 设置监听端口
app.listen(3000, () => {
    console.log('server is start');
})