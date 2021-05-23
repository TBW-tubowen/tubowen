<template>
<div>
    <h1>this is {{name}}</h1>
    <demo></demo>
</div>
</template>

<script>
import Demo from './Demo';
export default {
    data() {
        return {
            name: 'child'
        }
    },
    created() {
        // console.log('child-created', this)
    },
    components: {Demo}
}
</script>

<style>

</style>