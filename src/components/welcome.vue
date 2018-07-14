<template>
    <div>
        Welcome {{username}} to YsE Accounting
    </div>
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