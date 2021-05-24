import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
new Vue({
    // 注册
    router,
    store,
    render: h => h(App)
}).$mount('#app');