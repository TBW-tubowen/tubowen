// 引入express
let express = require('express');
// 引入ejs
let ejs = require('ejs');

// 构建应用
let app = new express();

// 更改ejs的后缀：ejs的后缀默认为.ejs 将其改为.html
// app.engine('.html', ejs.__express);

// 静态化
app.use('/dist/', express.static('./dist'));

// 设置用户的请求
app.get('*', (req, res) => {
    // 渲染指定的页面，默认会渲染views里面的文件
    res.render('01.ejs');
})

app.listen(80, () => {
    console.log('服务器启动了');
})