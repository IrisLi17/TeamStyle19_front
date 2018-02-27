<template>
<div>
    <el-menu :default-active="activeIndex" mode="horizontal" router class="PC">
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
    <el-menu router class="mobile" mode="horizontal">
        <el-menu-item  id="mobile-menu">
            <img src ='/static/img/menu.png' @click="show=!show">
            <transition
                name="dropdown-animate"
                enter-active-class = "animated slideInDown"
                leave-active-class = "animated slideOutUp">
                <ul v-show="show" class="mydropdown">
                    <li> index </li>
                    <li> fakehome </li>
                    <li> 文件 </li>
                    <li> 队伍 </li>
                    <li> <img src='/static/img/close.png' @click="show=!show"></li>
                </ul>
            </transition>
        </el-menu-item>
        <el-menu-item v-if="hasLogin" index="5" id="profile" route="/">
            <el-dropdown @command="handleJump" class="mobile-dropdown"> 
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
</div>
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
                show: true
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
@import "/static/css/animate.css";
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
@media screen and (max-width:960px) {
    ul {
        height: 40px;
    }
    li{
        height: 40px;
        padding: 0;
        border: none;
        text-align: center;
    }
    img {
        height: 30px;
        width: 30px;
        display: block;
        margin: 5px 5px;
    }
    #log {
        line-height: 40px;
        margin-right: 10px;
    }
    .el-dropdown{
        position: absolute;
        top: 0;
    }
    #mobile-menu {
        height: 40px;
        border: none;
    }
    .mydropdown {
        height: 100vh;
        width: 100vw;
        padding: 0;
        color: white;
        background-color: black;
        z-index: 2000;
        position: absolute;
        top: 0;
        list-style-type: none;
        li{
            height: 100px;
            line-height: 100px;
            border-bottom: {
                color: white;
                width: 1px;
            }
            img {
                margin: calc(50% - 15px) auto;
            }
        }
    }
    /*.popper__arrow{
        display:none;
    }*/
}
</style>
