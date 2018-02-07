<template>
    <el-menu :default-active="activeIndex" mode="horizontal" router="true">
        <el-menu-item index="1" router="/"> index </el-menu-item>
        <el-menu-item index="2" route="/home"> fakehome </el-menu-item>
        <el-menu-item index="3" route="/file"> 文件 </el-menu-item>
        <el-menu-item index="4" route="/team"> team </el-menu-item>
        <el-menu-item index="5" id="log" route="/login"> 登录|注册 </el-menu-item>
    </el-menu>
    <!--router-link to="/"><span id="no1">1</span></router-link>
    <router-link to="/home"><span id="no2">2</span></router-link>
    <span id="no3">3</span>
    <span id="no4">4</span>
    <router-link to="/login"><span id="log">登陆/注册</span></router-link-->
</template>

<script>
    export default{
        name: 'NavBar',
        data(){
            return{
                activeIndex:'1'
            }
        }
    }
</script>

<style lang="scss" scoped>
#log{
    border:none;
    position: absolute;
    right: 0;
    height: 100%;
    line-height: 60px;
    &:visited{
        color:#909399;
    }
}
a,a:active,a:link,a:hover,a:visited{
    text-decoration: none;
}  
</style>
