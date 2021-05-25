// 引入vue
const Vue = require('vue');
// 创建应用
const app = new Vue({
    template: `
        <div>
            <h1 @click="demo">Vue --- {{msg}}</h1>
        </div>
    `,
    data: {
        msg: 'msg'
    },
    methods: {
        demo() {
            console.log('demo')
        }
    }
})

// 暴露app
module.exports = app;