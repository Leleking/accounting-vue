
import {mapState} from 'vuex'
export default{
    data() {
       return{
           postData:{
               item:'',
               amount:'',
               details:'',
               units:'',
               date_added:'',
               user_id: ''
        },
           loading:true,
           recentData:''
       }
    },
    computed:{
        ...mapState({
            authStore : state => state.authStore
        })
    },
    methods:{
        getRecentData:function(url){
            this.$http.get(url).then((response)=>{
                if(response.status === 200){
                    this.loading = false
                    this.recentData = response.body.data
                }
            }).catch((error)=>{
                
                if(error.status === 0){
                    this.$toast.error('Server not reached', 'Error', this.notificationSystem.options.error);
                }
                
            })
        },
        postDaybookData:function(url){
            this.$validator.validateAll().then(() => {

                if (!this.errors.any()) {
                    this.postData.user_id = this.authStore.authUser.id
                    this.$validator.validateAll()
                    this.$http.post(url,this.postData).then((response)=>{
                        if(response.status === 200){
                           this.recentData.push(this.postData)
                           this.$toast.success('Successfully inserted record!', 'OK', this.notificationSystem.options.success);
                        }
                    }
                        
                    ).catch((error)=>{
                        Promise.reject(error)
                        this.$toast.error('Server not reached', 'Error', this.notificationSystem.options.error);
                    }
                       
                    )
                
                }
              }).catch((err) =>{
              });
            /*
           
        */
        }
        
    },
    


}