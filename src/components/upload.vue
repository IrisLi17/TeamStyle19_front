<template>
	<vue-clip :options="options" :on-sending="sending">
    <template slot="clip-uploader-action">
      <div>
        <el-button class="dz-message">点击或拖拽到此处开始上传</el-button>
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
</template>

<script>
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
					//acceptedFiles: ['C++/cpp,c,cxx,h,hxx']
				},
				files: null,
				isProfile: true
      }
		},
		methods: {
			sending (file, xhr, formData) {
				formData.append('userid',localStorage.getItem('teamstyle_id'))
				formData.append('headpic',this.isProfile)
      }
		}

  }
</script>