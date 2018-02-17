<template>
<div>
    <el-table stripe border>
        <el-table-column prop="teammember" label="队员" align="center">
        </el-table-column>
        <el-table-column label="操作" v-if="isleader">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>


<script>
export default {
  name: 'MyTeam',
  data() {
      return {

      }
  },
  methods: {
      handleDelete(index, row){
          /*to be added*/
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
