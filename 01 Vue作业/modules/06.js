import Vue from 'vue';

// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        title: '<b>hello world</b>'
    }
})

setTimeout(() => {
    app.title = '我爱你！！';
}, 2000);