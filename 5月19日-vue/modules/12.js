import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import bm from './bm';

// 引入安装
Vue.use(Vuex);

// 创建store对象
const store = new Vuex.Store({
    plugins: [logger(), bm],
    // 创建数据
    state: {
        num: 0
    },
    // 计算属性数据 --- 相当于computed
    getters: {
        doubleNum(state) {
            return state.num * 2;
        }
    },
    // 同步消息
    mutations: {
        setNum(state, v) {
            state.num = v;
        }
    }
})

const child = Vue.extend({
    template: '#child'
})

const app = new Vue({
    // 注册store对象
    store,
    el: '#app',
    data: {
    },
    components: {child},
    computed: {
        num: {
            get() {
                return this.$store.state.num;
            },
            set(v) {
                this.$store.commit('setNum', v)
            }
        }
    }
})