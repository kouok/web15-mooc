<template>
    <div id="app">
        <top></top>
        <router-view/>
        <foot></foot>
    </div>
</template>
<script>
    import top from './components/Header'
    import foot from './components/Footer'

    export default {
        name: "App",
        components: {
            top,
            foot
        }
    }
</script>
<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    a, a:hover {
        text-decoration: none;
        color: #2c3e50;
    }
</style>
