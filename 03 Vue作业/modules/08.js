import Vue from 'vue';

const sy102 = Vue.extend({
    template: '#tpl',
    data() {
        return {
            title: '斑码教育',
            name: 'child'
        }
    },
    // 钩子函数 --- 生命周期
    // 1、创建
    beforeCreate() {
        console.log(11, 'beforeCreate')
    },
    created() {
        console.log(22, 'created')

    },
    beforeMount() {
        console.log(33, 'beforeMount')

    },
    mounted() {
        console.log(44, 'mounted')
        
    },

    // 2、存在
    beforeUpdate() {
        console.log(55, 'beforeUpdate')

    },
    updated() {
        console.log(66, 'updated')

    },

    // 3、销毁
    beforeDestroy() {
        console.log(77, 'beforeDestroy')

    },
    destroyed() {
        console.log(88, 'destroyed')

    },

    // 4、缓存
    activated() {
        console.log(99, 'activated')
        
    },
    deactivated() {
        console.log('00', 'deactivated')

    }
})
const sy103 = Vue.extend({
    template: `
        <h1>sy103</h1>
    `
})
let app = new Vue ({
    el: '#app',
    data: {
        msg: '我爱你',
        com: 'sy102'
    },
    components: {
        sy102,
        sy103
    },
    methods: {
        toggle() {
            this.com = this.com == 'sy102' ? 'sy103': 'sy102'
        }
    }
})