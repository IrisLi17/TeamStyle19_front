<template>
    <div id="wrap">
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
            <h3>组队</h3>
            <el-form-item label="是否为队长">
                <el-switch 
                    v-model="form.isteamleader" 
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="是"
                    inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item v-if="form.isteamleader" label="队伍名称">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item v-if="!form.isteamleader" label="邀请码">
                <el-input v-model="form.invitecode"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'team',
  data(){
      return{
          form: {
              isteamleader: false,
              teamname:'',
              invitecode:''
          }
      }
  }
}
</script>

<style lang="scss" scoped>
template {
    width: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
h1{
    line-height: 1;
    text-align:center;
}
#wrap {
  width: 50%;
  margin: 40px auto;
  max-width: 400px;
}
button {
  width: 100%;
}
</style>
