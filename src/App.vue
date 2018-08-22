<template>
  <div id="app">
    <navbar v-show="navR"></navbar>
     <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn">
    <router-view></router-view>
  </transition>
    <keyfooter v-show="this.loader"></keyfooter>
    
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import {routing} from '@/mixins'
import navbar from  './components/partials/navbar'
import keyfooter from  './components/partials/keyfooter'
export default {
  name: 'App',
 mixins:[routing],
  computed:{
    ...mapState({
       authStore : state => state.authStore,
       routeStore: state => state.routeStore
    }),
    ...mapGetters({
      loader : 'getLoading'
    }),
    navR(){
      if(this.authStore.authUser){
      return this.nav = true
    }
    },
    navLoad(){
      return this.$store.state.routeStore.loading
    }
  },
  components:{
    navbar,
    keyfooter

  },
  data(){
    return{
      nav:false,
      test:false
    }
  },
}
 
</script>

