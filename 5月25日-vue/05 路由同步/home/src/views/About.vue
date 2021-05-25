<template>
<div>
    <h1>hello {{msg}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'this is about'
        }
    }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
h1 {
    background-color: $bg;
    color: $color;
}
</style>