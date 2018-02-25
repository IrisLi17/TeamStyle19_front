<template>
<div>
	<vue-clip :options="options" :on-sending="sending">
    <template slot="clip-uploader-action">
      <div>
				<i class="el-icon-upload uploader-icon dz-message"></i>
        <!--el-button class="dz-message">点击或拖拽到此处开始上传</el-button!-->
      </div>
    </template>

    <template slot="clip-uploader-body" slot-scope="props">
			<div v-if="props.files.length>0">
				<p>最后一次上传</p>
				{{ props.files[props.files.length-1].name }} {{props.files[props.files.length - 1].status}} {{props.files[props.files.length - 1].errorMessage}}
				<p>上传历史</p>
      	<div v-for="file in props.files" :key="file.name">
        	{{ file.name }} {{file.status}} {{ file.errorMessage}}
      	</div>
			</div>
			<div v-else>
				暂无上传记录
			</div>
			
    </template>

	</vue-clip>
	<el-button @click="testfile">getfile</el-button>
	<!--img :src="headurl" style="height: 36px"!-->
</div>
</template>

<script>
	import authSrv from '@/api/auth.js'
	import downloadSrv from '@/api/download.js'
  export default {
		name: 'upload',

    data () {
      return {
				options: {
          url: '/backend/upload/file/',
					paramName: 'file',
					maxFilesize: {
    				limit: 0.8,
    				message: 'Your file size is greater than the max file size'
  				},
					/*acceptedFiles: {
						extensions: ['text/plain','text/cxx'],
						message: 'You are uploading an invalid file'
					}*/
				},
				files: null,
				isProfile: false,
				//headurl: null
      }
		},
		methods: {
			sending (file, xhr, formData) {
				console.log(file.type)
				formData.append('userid',localStorage.getItem('teamstyle_id'))
				formData.append('headpic',this.isProfile)
			},
			/*gethead() {
				console.log('click')
				authSrv.getHeadpic(this)
			}*/
			testfile () {
				const test = {
					userid: 5,
					filename: 'std.cpp'
				}
				downloadSrv.testfile(this,test)
			}
		}

  }
</script>

<style scoped>
  .uploader-icon{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
		font-size: 84px;
    color: #8c939d;
    width: 278px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .uploader-icon:hover {
    border-color: #409EFF;
  }
  
</style>
