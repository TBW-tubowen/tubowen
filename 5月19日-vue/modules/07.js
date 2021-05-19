import Vue from 'vue';

const child = Vue.extend({
    template: '#child',
    data() {
        return {
            msg: 'child component',
            title: 'title'
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