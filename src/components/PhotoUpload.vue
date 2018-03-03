<template>
  <div id="wrap">
      <el-upload
        id="uploader"
        action=""
        :show-file-list="false"
        :on-success="handlesuccess"
        :before-upload="beforeupload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="photo">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
  </div>
</template>
<script>
export default {
  name: 'PhotoUpload',
  data(){}
}
</script>

<style lang="scss" scoped>
#wrap {
    margin: 40px auto;
    width: 200px;
    height: 200px;
}
#uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
.photo {
    width: 200px;
    height: 200px;
    display: block;
}
</style>
