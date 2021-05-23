import Vue from 'vue';
import axios from 'axios';
import child from './child';
const app = new Vue({
    el: '#app',
    data: {
        msg: ''
    },
    // 注册组件
    components: {child},
    created() {
        // 发送get请求
        axios
            .get('/data/demo.json', {
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
        axios
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