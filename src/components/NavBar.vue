<template>
    <el-menu :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="1" route="/"> index </el-menu-item>
        <el-menu-item index="2" route="/home"> fakehome </el-menu-item>
        <el-menu-item index="3" route="/file"> 文件 </el-menu-item>
        <el-menu-item index="4" route="/ShowAllTeams"> team </el-menu-item>
        <el-menu-item v-if="hasLogin" index="5" id="profile" route="/">
            <!--el-dropdown @command="logout">
                <span class="el-dropdown-link">
                    <img :src="profile">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>log out</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown-->
            <el-dropdown @command="handleJump"> 
                <span> {{username}} </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item command="b">我的队伍</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <router-link to="/"><span @click = "logout"> 退出 </span></router-link>
        </el-menu-item>
        <el-menu-item v-else index="5" id="log" route="/login"> 登录|注册 </el-menu-item>
    </el-menu>
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
                profile: avatar,
            }
        },
        computed: {
            hasLogin(){
                return Boolean(this.$store.state.userid!=null)
            },
            username(){
                return this.$store.state.username
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
            },
            handleJump(command){
                if(command === "a"){
                    this.$router.push('/PwdChange')
                } else if(command === "b"){
                    this.$router.push('/MyTeam')
                }
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
span {
    margin-left:10px;
    color: black;
}
</style>
