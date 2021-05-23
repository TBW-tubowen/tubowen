<template>
<div>
    <h1>hello this si {{name}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Sy102',
            sex: 'nan'
        }
    },
    created() {
        console.log('this is sy102-created')
    }
}
</script>

<style lang="scss" scoped>
    $color: cyan;
    h1 {
        color: $color;
        &:hover {
            color: greenyellow
        }
    }

</style>