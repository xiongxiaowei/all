// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
Vue.config.productionTip = false
import angular from 'angular'
var app=angular.module('test',[])
app.controller('con1',function($scope,$http){
	$scope.goods=[]
	$scope.fetchGoods=()=>{
		$http.get('/api/goods',{cache:true}).then(function(res){
		  console.log(res.data)
		  $scope.data=res.data
		},function(res){
		  //失败时执行
		  console.log(res.data)
		})
	}
})
axios.interceptors.request.use(function (config) {  /* 配置发送请求的信息 */
  // this.$store.dispatch('showLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { /* 配置请求回来的信息 */
  // this.$store.dispatch('')
  return response
}, function (error) {
  return Promise.reject(error)
})
Vue.prototype.$http = axios 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
