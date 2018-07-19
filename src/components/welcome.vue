<template>
   
      

 <div class="page">
      <div class="page-content">
        <h2>Bla</h2>
        <p>Page content goes here <router-link to='/dayBook/salesDayBook'>click</router-link></p>
        <p><a href="" @click.prevent="alert()">some</a></p>
      </div>
    </div>
    <!-- Page -->
    
    
</template>
<script>
import {mapState} from 'vuex'
    export default{
        name:'welcome',
        data(){
            return{
                email:'',
                username:''
            }
        },
        computed:{
            ...mapState({
                authStore : state => state.authStore
            })
        },
        created(){
            this.email = this.authStore.authUser.email
            this.username = this.authStore.authUser.name
        }
    }
</script>