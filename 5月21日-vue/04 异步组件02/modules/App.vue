<template>
<div id="app">
    <h1>app part hello {{msg}}</h1>
    <hr>
    <xxoo></xxoo>
    <hr>
    <demo></demo>
</div>
</template>

<script>
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