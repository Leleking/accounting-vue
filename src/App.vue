<template>
  <div id="app">
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
     
  }
}
 
</script>

