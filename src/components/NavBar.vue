<template>
    <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1"> 选项1 </el-menu-item>
        <el-menu-item index="2"> 选项2 </el-menu-item>
        <el-menu-item index="3"> 选项3 </el-menu-item>
        <el-menu-item index="4"> 选项4 </el-menu-item>
        <router-link to="/login"><el-menu-item index="5" id="log"> 登录|注册 </el-menu-item></router-link>
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
    &:visited{
        color:#909399;
    }
}
    
</style>
