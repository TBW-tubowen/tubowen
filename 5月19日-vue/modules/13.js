import Vue from 'vue';


let first = Vue.extend({
    template: '#header'
})
const second = Vue.extend({
    template: '#main'
})
const three = Vue.extend({
    template: '#footer'
})


const app = new Vue({
    
    el: '#app',
    data: {
        child: 'first'
    },
    components: {first,second,three}
})

let router = () => {
    app.child = location.hash.slice(2);
}
window.addEventListener('hashchange', router);
router();