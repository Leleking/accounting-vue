<template>
    <div>
      <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" @submit.prevent="">
					<span class="login100-form-title p-b-34">
					<router-link to="/" >Account Login</router-link>	
					</span>
					
					<div class="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="first-name" class="input100" name="email" v-validate="{ required: true, email: true, regex: /[0-9]+/ }" v-model="user.email" type="text" placeholder="email">
						<span class="focus-input100"></span>
                        <span>{{ errors.first('email') }}</span>
					</div>
					<div class="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input class="input100" type="password" v-model="user.password" placeholder="Password">
						<span class="focus-input100"></span>
					</div>
					
					<div class="container-login100-form-btn">
						<button @click="login" class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="w-full text-center p-t-27 p-b-239">
						<span class="txt1">
							Forgot
						</span>

						<a href="#" class="txt2">
							User name / password?
						</a>
					</div>

					<div class="w-full text-center">
						<a href="#" class="txt3">
							Sign Up
						</a>
					</div>
				</form>

				<div class="login100-more" style="background-image: url('/static/images/accounting.jpg');"></div>
			</div>
		</div>
	</div>
	<div id="dropDownSelect1"></div>
    </div>
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
            this.$toast.show('Login Page', 'Admin', this.notificationSystem.options.show);
        }

    }
</script>
<style scoped>
/* Split the screen in half */
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: #111;
}

/* Control the right side */
.right {
  right: 0;
  background-color: red;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.centered img {
  width: 150px;
  border-radius: 50%;
}
</style>
