<template>
    <div>this is demo data: {{name}} -- {{sex}}</div>
</template>

<script>
import Sy102 from './Sy102';
export default {
    mixins: [Sy102, {
        data() {
            return {
                sex: 'nan'
            }
        }
    }],
    data() {
        return {
            sex: 'nv'
        }
    },
    created() {
        console.log('this is demo-created');
    }
}
</script>

<style>

</style>