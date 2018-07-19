<template>
  <div id="app">
    <navbar v-show="navR"></navbar>
    
    <router-view/>
    <keyfooter v-show="navR"></keyfooter>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
import navbar from  './components/partials/navbar'
import keyfooter from  './components/partials/keyfooter'
export default {
  name: 'App',
 
  computed:{
    ...mapState({
       authStore : state => state.authStore
    }),
    navR(){
      if(this.authStore.authUser){
      return this.nav = true
    }
    }
  },
  components:{
    navbar,
    keyfooter

  },
  data(){
    return{
      nav:false
    }
  },
  created(){
    
  },
}
 
</script>

