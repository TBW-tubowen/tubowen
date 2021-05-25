<template>
<div id="app">
    <h1>my vue</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
// 实现组件的挂载
import Home from '@/views/Home';
import About from '@/views/About';
export default {
    // 注册组件
    components: {
        Home,
        About
    }
}
</script>

<style>

</style>