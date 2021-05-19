import Vue from 'vue';

const child = Vue.extend({
    template: '#child',
    data() {
        return {
            msg: 'child component'
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    components: {child}
})