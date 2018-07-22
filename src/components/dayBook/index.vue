<template>
  <div>
     <div class="page">
     <BookHeader><span>{{this.$route.name}}</span></BookHeader>
      <!-- Panel Table Example1 Report -->
    <transition appear enter-active-class="animated fadeIn">
     <router-view></router-view>
    </transition>
     
        <!-- End Panel Table Example1 Report-->
    <!-- End Page -->
     </div>
  </div>
</template>

<script>
import BookHeader from './partials/BookHeader'
import rightAside from './aside/rightAside'
    export default{
      components:{
        rightAside,
        BookHeader
      },
      data(){
        return{
          componentId:""

        }
      }
    }
</script>