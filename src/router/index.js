import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {routes} from './routes'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
 routes
})
router.beforeEach((to,from,next) =>{
  store.dispatch('setLoading',true)
  if(to.meta.requiresAuth){
  if(JSON.parse(window.localStorage.getItem('authUser'))){
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if(authUser && authUser.access_token){
    store.dispatch('setUserObject',authUser)


    next()
  }
}else{
  store.dispatch('setLoading',true)
  next({name:'Login'})
}
  }else{
  store.dispatch('setLoading',true)

    next()
  }
})

router.afterEach((to, from) => {

  //  store.dispatch('setLoading',false)

})