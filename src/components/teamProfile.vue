<template>
  <div>
      <upload></upload>
      <h1>{{teamname}}</h1>
        <el-table :data="team" :span-method="arraySpanMethod" stripe border>
            <el-table-column prop="leader" label="队长" align="center">
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
import upload from './upload'
import teamSrv from '@/api/team.js'
export default {
  name: 'teamProfile',
  components: {
      upload
  },
  data() {
      return {
          team: [],
          //memberid: [],
          isleader: true,
          teamname: null
      }
  },
  created(){
      //if(this.$store.state.isLeader!=null){
      //    this.isleader = this.$store.state.isLeader
      //} else {
          teamSrv.isLeader(this)
      //}
      teamSrv.showMyteam(this)
  },
  methods: {
      handleDelete(index, row){          
        teamSrv.removeMember(this,this.team[index].member,teamSrv.showMyteam)          
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if ( columnIndex == 0 ){
            if( rowIndex == 0){
                console.log(row)
                return [this.team.length,1]
            } else if( rowIndex >0){
                return [0,0]
            }
        }
      },
  }
}
</script>

<style lang="scss" scoped>
div{
    max-width: 600px;
    min-width: 480px;
    margin: 40px auto;
}
h1{
    text-align: left;
    font-size: 24px;
}
</style>
