<template>
    <div>
        <a href="/"><span id="no1">1</span></a>
        <span id="no2">2</span>
        <span id="no3">3</span>
        <span id="no4">4</span>
        <a href="/login"><span id="log">登陆/注册</span></a>
    </div>
</template>

<script>
    export default{
        name: 'NavBar'
    }
</script>

<style lang="scss" scoped>
    template {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    div {
        margin: 0;
        width: 100%;
        height: 5%;
        background: {
            color: black;
        }
        display: flex;
        display: -webkit-flex; /*Safari*/
        align-items: center;
        justify-content: space-between;
    }
    span {
        color: white;
        line-height: 1;
        cursor: pointer;
        &:hover {
            color:cyan;
        }
    }
    a,a:visited,a:link,a:active,a:hover {
        text-decoration: none;
    }
    #no1,#no2,#no3{
        flex-basis: 2%;
    }
    #no4 {
        flex-basis: 80%;
        text-align: right;
    }
    #log {
        flex-basis: 10%;
    }
</style>
