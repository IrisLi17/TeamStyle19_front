<template>
<div>
  <el-table :data='team' stripe border >
      <el-table-column prop="teamname" label="队伍名称" align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="teamleader" label="队长" align="center" header-align="center">
      </el-table-column>
  </el-table>
  <router-link to="/team" style="font-size: 12px;"><a>加入队伍</a></router-link>
</div>
</template>

<script>
export default {
  name:'ShowAllTeams',
  data(){
      return{
          team: [{
              teamname: 'efsdgrfuioahfioasufhasui',
              teamleader: '张狗蛋'
          },
          {
              teamname: '阿斯顿v哈稍等v阿达VS的VS v的',
              teamleader: 'sdv33659d6fgdgf'
          }]
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
