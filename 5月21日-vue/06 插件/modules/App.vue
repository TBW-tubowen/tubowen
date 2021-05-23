<template>
<div id="app">
    <h1>app part hello {{msg}}</h1>
    <hr>
    <child></child>
    <hr>
    <demo></demo>
</div>
</template>

<script>
// 引入Child组件
import Child from './Child';
import Demo from './Demo';
export default {
    // 数据
    data() {
        return {
        }
    },
    created() {
        console.log('app-created', this.xxoo);
    },
    components: {Child, Demo}
}
</script>

<style lang="scss" scoped>
    $color: green;
    h1 {
        color: $color
    }
</style>