<template>
<div>
    <h1>hello this is {{name}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'demo'
        }
    }
}
</script>

<style lang="scss" scoped>
    $color: purple;
    h1 {
        color: $color;
        &:hover {
            color: blue;
        }
    }
</style>