// 引入Vue
import Vue from 'vue';
// 引入 axios
import axios from 'axios';
// 安装axios --- 非Vue家族插件，安装方式：将其设置到Vue.prototype上
Vue.prototype.$http = axios;

// 构建应用
const app = new Vue({
    el: '#app',
    data: {
        msg: '斑码教育'
    },
    created() {
        // 发送get请求
        this.$http
            // 本地不存在的
            .get('/data/sy102')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
})