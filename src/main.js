// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate';
import {getHeader,loginUrl} from './config'
import VueResource from 'vue-resource'
import VueProgressBar from 'vue-progressbar'
import VueIziToast from 'vue-izitoast';
import vbclass from 'vue-body-class'
Vue.use( vbclass, router )

import 'izitoast/dist/css/iziToast.css'

Vue.use(VueIziToast)
Vue.use(VeeValidate)
Vue.use(VueProgressBar, {
  color: 'yellow',
  failedColor: 'red',
  height: '2px',
  thickness: '5px',
  autoFinish:false
})
Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false


Vue.http.interceptors.push(function(request, next) {
  this.$Progress.start()
  if(request.url !== loginUrl){
   const header = getHeader()
  request.headers.set('Authorization', header.Authorization)
  request.headers.set('Accept' ,header.Accept)
  next()
  this.$Progress.finish()
  }
  next()
  this.$Progress.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>' 
})
