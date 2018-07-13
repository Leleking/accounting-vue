// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import {getHeader,loginUrl} from './config'
import VueResource from 'vue-resource'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px',
  thickness: '7.5px'
})
Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false


Vue.http.interceptors.push(function(request, next) {
  if(request.url !== loginUrl){
   const header = getHeader()
  request.headers.set('Authorization', header.Authorization)
  request.headers.set('Accept' ,header.Accept)
  next()
  }
  next()
})
router.beforeEach((to,from,next) =>{
  if(to.meta.requiresAuth){
    if(JSON.parse(window.localStorage.getItem('authUser'))){
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if(authUser && authUser.access_token){
    store.dispatch('setUserObject',authUser)
    next()
  }
}else{
  next({name:'Login'})
}
  }else{
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
