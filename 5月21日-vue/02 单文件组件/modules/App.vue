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
import Child from './Child';

export default {
    // 数据
    data() {
        return {
            msg: '222'
        }
    },
    // 注册组件
    components: { Child },

}
</script>

<style>

</style>