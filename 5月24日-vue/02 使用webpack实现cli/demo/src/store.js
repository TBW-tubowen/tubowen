// 引入vuex
import vuex, {Store} from 'vuex';
import Vue from 'vue';

// 安装
Vue.use(vuex);

// 产生store
export default new Store({
    state: {
        title: 'sy102'
    }
})