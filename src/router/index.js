import Vue from 'vue'
import Router from 'vue-router'

import {routes} from './routes'
Vue.use(Router)

export const router = new Router({
  mode: 'history',
 routes
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