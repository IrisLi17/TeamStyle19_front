<template>
<div>
    <el-table :data="team" stripe border>
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="member" label="队员" align="center">
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
          //memberid: [],
          isleader: true
      }
  },
  created(){
      if(this.$store.state.isLeader!=null){
          this.isleader = this.$store.state.isLeader
      } else {
          teamSrv.isLeader(this)
      }
      teamSrv.showMyteam(this)
  },
  methods: {
      handleDelete(index, row){          
        teamSrv.removeMember(this,this.team[index].member,teamSrv.showMyteam)          
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
