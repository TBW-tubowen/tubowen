import Vue from 'vue';
import Vuex from 'vuex';

// 引入安装
Vue.use(Vuex);

// 创建store对象
const store = new Vuex.Store({
    // 创建数据
    state: {
        msg: 'this is msg',
        num: 0
    },
    // 计算属性数据 --- 相当于computed
    getters: {
        doubleNum(state) {
            /* 
                第一个参数表示新的state数据
                第二个参数表示新的getters数据
            */
            // console.log(arguments);
            console.log(111);
            return state.num * 2;
        }
    },
    // 同步消息
    mutations: {
        addNum(state) {
            /* 
                有两个参数：
                    1、state
                    2、接收传递的参数
            */
            // console.log(arguments);
            state.num += 3;
        },
        reduceNum(state) {
            // console.log(arguments);
            state.num -= 5;
        },
        resetNum(state) {
            state.num = 0;
        }
    },
    actions: {
        resetNum(store) {
            /* 
                有两个参数：
                    1、store
                    2、接收传递的参数
            */
            // console.log(arguments);
            setTimeout(() => {
                // state的数据修改只能在同步任务中执行
                store.commit('resetNum');
            }, 2000);
        }
    }
})

const child = Vue.extend({
    template: '#child'
})
const other = Vue.extend({
    template: '#other' 
})

const app = new Vue({
    // 注册store对象
    store,
    el: '#app',
    data: {
        num: 1
    },
    components: {child, other},
    methods: {
        addNum() {
            // 改变的是store对象中的state
            // 不要直接修改 需要通过同步任务来修改
            /* 
                commit: 有两个参数，
                    1、发布的消息名称，
                    2、传递的数据
            */
            this.$store.commit('addNum', [1, 2, true]);
        }
    }
})