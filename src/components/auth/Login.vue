<template>
   

   <div>
         <div class="page" data-animsition-in="fade-in" data-animsition-out="fade-out">
      <div class="page-content">
        <div class="page-brand-info">
          <div class="brand">
            <img class="brand-img" src="/static/assets/images/logo@2x.png" alt="...">
            <h2 class="brand-text font-size-40">KEYSTAMP</h2>
          </div>
          <p class="font-size-20">Generate all kinds of reports</p>
        </div>

        <div class="page-login-main">
          <div class="brand hidden-md-up">
            <img class="brand-img" src="/static/assets/images/logo-colored@2x.png" alt="...">
            <h3 class="brand-text font-size-40">KEYSTAMP</h3>
          </div>
          <h3 class="font-size-24">LOGIN</h3>
          <p>Login with your email and password to access KEYSTAMP</p>

          
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="email" v-model="user.email" class="form-control empty" id="inputEmail" name="email">
              <label class="floating-label" for="inputEmail">Email</label>
            </div>
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="password" v-model="user.password" class="form-control empty" id="inputPassword" name="password">
              <label class="floating-label" for="inputPassword">Password</label>
            </div>
            <div class="form-group clearfix">
              <div class="checkbox-custom checkbox-inline checkbox-primary float-left">
                <input type="checkbox" id="remember" name="checkbox">
                <label for="inputCheckbox">Remember me</label>
              </div>
              <a class="float-right" href="forgot-password.html">Forgot password?</a>
            </div>
            <button @click="login()" class="btn btn-primary btn-block">LOGIN</button>
      

        

          <span style="padding-bottom:300px"></span>
        </div>

      </div>
    </div>
   </div>
    <!-- Page -->
 

</template>
<script>
import login from '../../mixins/toast.js'
import {mapState,mapActions} from 'vuex'
import {loginUrl, userUrl} from '../../config'
    export default{
        mixins:[login],
        data(){
            return{
                user:{
                    email:"",
                    password:''
              }
            }
        },
        computed:{
            ...mapState({
                authStore: state => state.authStore
            })
        },
        methods:{
            login(){
                this.$store.dispatch('validateUser',this.user).then((response) => {
                    const authUser = {}
                    this.$http.post(loginUrl,this.authStore.postData).then((response) =>{
                        if(response.status == 200){
                          //console.log(response)
                          //this.authStore.authUser.access_token = response.data.access_token
                          authUser.access_token = response.data.access_token
                          authUser.refresh_token = response.data.refresh_token
                          window.localStorage.setItem('authUser',JSON.stringify(authUser))
                          this.$store.dispatch('setUserObject',authUser)
                          this.$http.get(userUrl).then((response) => {
                              authUser.email = response.body.email
                               authUser.name = response.body.name
                               window.localStorage.setItem('authUser',JSON.stringify(authUser))
                               this.$store.dispatch('setUserObject',authUser)
                               this.$router.push({name:'welcome'})
                          })
                          }
                    }).catch((error)=>{
                        this.$Progress.fail()
                        Promise.reject(error.data)})
                }).catch((error) => {
                     this.$Progress.fail()
                    console.log('something went wrong')})
            }
        },
        created(){
           // this.$toast.show('Login Page', 'Admin', this.notificationSystem.options.show);
        }

    }
</script>
  <style src="../../assets/css/login-v2.css"></style>
