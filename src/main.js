import Vue from 'vue'
import App from './App.vue'
import router from './router'//路由
import store from './store' //状态管理
import ElementUI from 'element-ui' //element框架
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router' //路由
import axios from 'axios'
import Axios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(Axios)
Vue.config.productionTip = false

//连续点击路由时报错的解决方案
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//请求拦截器发送令牌
axios.interceptors.request.use(function(config){
//携带凭证
config.headers['Authorization'] = sessionStorage.getItem("token");
return config;
},function(error){
return Promise.reject(error);
});
//响应拦截处理
axios.interceptors.response.use(function(response){
return response;
},function(error){
var url = error.config.url.toLocaleLowerCase();
if(error.response.status ===401&& !url.endsWith("oauth/authenticate")){
router.replace({name:'login',query:{returnUrl:router.fullPath}});
}
return Promise.reject(error);//返回错误
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
