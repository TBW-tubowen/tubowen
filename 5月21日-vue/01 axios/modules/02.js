// 引入Vue
import Vue from 'vue';
// 引入 axios
import axios from 'axios';
// 引入组件
import child from './child';

// 安装axios --- 非Vue家族插件，安装方式：将其设置到Vue.prototype上
// Vue.prototype.axios = axios;
// 为了语义化
Vue.prototype.$http = axios;


// 构建应用
const app = new Vue({
    el: '#app',
    data: {
        msg: ''
    },
    // 注册组件
    components: {child},
    created() {
        console.log('app', this);
        // 发送get请求
        this.$http
            .get('/data/demo.json?name=zhangsan&age=18', {
                // query数据
                params: {
                    sex: 'nan',
                    class: 'sy102'
                }
            })
            .then(({data}) => {
                console.log(data);
                this.msg = data.msg;
            }).catch(err => console.log(err));
        
        // 发送post请求
        this.$http
            .post('/data/demo.json', {xxoo:123}, {
                // 设置请求头信息
                headers: {
                    'content-type': 'application/x-www-from-urlencoded',
                },
                // query数据 --- 默认的时候追加到url部分
                params: {
                    q: 11,
                    w: 22
                }
            })
            .then(({data}) => console.log(data))
            .catch(err => console.log(err))
    }
})