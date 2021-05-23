import Vue from 'vue';

export default Vue.extend({
    template: `<h1>child part</h1>`,
    created() {
        console.log('child', this.$http);
        console.log('child', this);
    }
})