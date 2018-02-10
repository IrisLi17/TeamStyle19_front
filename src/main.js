// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './vuex'
// 后端接口抽象成Resource
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if(!localStorage.getItem('teamstyle_id')){
      //console.log('catch1')
      next({
        path: '/login',
      })
    } else{
      //console.log('catch2')
      next()
    }
  } else {
    //console.log('catch3')
    next()
  }
})

// 取 cookie 
function getCookie(name) {
  let arr,
      reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)")
  console.log(document.cookie)
  if(arr=window.document.cookie.match(reg)) {
    return decodeURIComponent(arr[2])
  }
}

// 设置 POST 请求时 的 data 格式
Vue.http.options.emulateJSON = true

// 设置 X-CSRFToken
Vue.http.interceptors.push(function(request, next) {
  if(request.method == 'POST'){
    request.headers.set('X-CSRFToken', getCookie('csrftoken'))
    console.log(getCookie('csrftoken'))
  }
  next()
})
