<template>
    <el-menu :default-active="activeIndex" mode="horizontal" router="router">
        <el-menu-item index="1" route="/"> index </el-menu-item>
        <el-menu-item index="2" route="/home"> fakehome </el-menu-item>
        <el-menu-item index="3" route="/file"> 文件 </el-menu-item>
        <el-menu-item index="4" route="/ShowAllTeams"> team </el-menu-item>
        <el-menu-item v-if="hasLogin" index="5" id="profile">
            <el-dropdown @command="logout">
                <span class="el-dropdown-link">
                    <img :src="profile">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>log out</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item v-else index="5" id="log" route="/login"> 登录|注册 </el-menu-item>
    </el-menu>
    <!--router-link to="/"><span id="no1">1</span></router-link>
    <router-link to="/home"><span id="no2">2</span></router-link>
    <span id="no3">3</span>
    <span id="no4">4</span>
    <router-link to="/login"><span id="log">登陆/注册</span></router-link-->
</template>

<script>
    import authSrv from '@/api/auth.js'
    import avatar from '../../static/img/AC.png'
    export default{
        name: 'NavBar',
        data(){
            return{
                activeIndex:'1',
                router:Boolean(1),
                profile: avatar
            }
        },
        computed: {
            hasLogin(){
                return Boolean(this.$store.state.userid!=null)
            }                
        },
        created () {
            this.hasLogin = Boolean(localStorage.getItem('teamstyle_id'))
        },
        methods: {
            logout () {
                console.log('trigger logout')
                this.hasLogin = false
                authSrv.logout(this)
            }
        }
    }
</script>

<style lang="scss" scoped>
#log,#profile{
    border:none;
    position: absolute;
    right: 0;
    height: 100%;
    line-height: 60px;
    &:visited{
        color:#909399;
    }
}
img {
    height: 60px;
    width: 60px;
    overflow: hidden;
}
a,a:active,a:link,a:hover,a:visited{
    text-decoration: none;
}  
</style>
