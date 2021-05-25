import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';

// 暴露默认接口
export default new Vue({
    // 注册
    router,
    store,
    render: h => h(App)
});