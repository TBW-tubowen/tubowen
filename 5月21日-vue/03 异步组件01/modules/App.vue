<template>
<div id="app">
    <h1>app part hello {{msg}}</h1>
    <hr>
    <child></child>
    <hr>
</div>
</template>

<script>
// 引入Child组件
import Vue from 'vue';

// 1、实现异步加载
Vue.component('child', () => new Promise((resolve, reject) => {
    // 使用settimeout实现
    setTimeout(() => {
        console.log('settimeout');
        resolve({
            template: '<h1>settimeout</h1>'
        })
    }, 2000);
}))

export default {
    // 数据
    data() {
        return {
            msg: '222'
        }
    },

}
</script>

<style lang="scss" scoped>
    $color: green;
    h1 {
        color: $color
    }
</style>