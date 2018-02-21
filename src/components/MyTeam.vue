<template>
<div>
    <el-table :data="team" stripe border>
        <el-table-column prop="teammember" label="队员" align="center">
        </el-table-column>
        <el-table-column label="操作" v-if="isleader" align="center">
            <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>


<script>
import teamSrv from '@/api/team.js'
export default {
  name: 'MyTeam',
  data() {
      return {
          team: [],
          memberid: [],
          isleader: true
      }
  },
  created(){
      teamSrv.showMyteam(this)
      if(this.$store.state.isLeader!=null){
          isleader = this.$store.state.isLeader
      } else {
          teamSrv.isLeader(this)
      }
  },
  methods: {
      handleDelete(index, row){
          this.$confirm('确认删除？','Warning',{
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(()=>{
            //alert('删除')
            teamSrv.removeMember(this,memberid[index],teamSrv.showMyteam)
          }).catch(()=>{
              //alert('已取消')
          })
      }
  }
}
</script>


<style lang="scss" scoped>
div{
    max-width: 600px;
    min-width: 480px;
    margin: 40px auto;
}
</style>
