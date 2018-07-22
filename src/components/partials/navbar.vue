<template>
<div>
   <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse"
      role="navigation">
    
      <div class="navbar-header">
        <button type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
          data-toggle="menubar">
          <span class="sr-only">Toggle navigation</span>
          <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
          data-toggle="collapse">
          <i class="icon md-more" aria-hidden="true"></i>
        </button>
        <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
          <img class="navbar-brand-logo" src="/static/assets/images/logo.png" title="Remark">
          <span class="navbar-brand-text hidden-xs-down"> Keystamp</span>
        </div>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-search"
          data-toggle="collapse">
          <span class="sr-only">Toggle Search</span>
          <i class="icon md-search" aria-hidden="true"></i>
        </button>
      </div>
    
      <div class="navbar-container container-fluid">
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
          <!-- Navbar Toolbar -->
          <ul class="nav navbar-toolbar">
            <li class="nav-item hidden-float" id="toggleMenubar">
              <a class="nav-link" data-toggle="menubar" href="#" role="button">
                <i class="icon hamburger hamburger-arrow-left">
                  <span class="sr-only">Toggle menubar</span>
                  <span class="hamburger-bar"></span>
                </i>
              </a>
            </li>
            <li class="nav-item hidden-sm-down" id="toggleFullscreen">
              <a class="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
                <span class="sr-only">Toggle fullscreen</span>
              </a>
            </li>
            <li class="nav-item hidden-float">
              <a class="nav-link icon md-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
                role="button">
                <span class="sr-only">Toggle Search</span>
              </a>
            </li>
           
          </ul>
          <!-- End Navbar Toolbar -->
    
          <!-- Navbar Toolbar Right -->
          <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
            <li class="nav-item dropdown">
              <a class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                data-animation="scale-up" role="button">
                <span class="avatar avatar-online">
                  <img src="/static/assets/portraits/5.jpg" alt="...">
                  <i></i>
                </span>
              </a>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-account" aria-hidden="true"></i> Profile</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-card" aria-hidden="true"></i> Billing</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-settings" aria-hidden="true"></i> Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" role="menuitem" @click.prevent="logout()"><i class="icon md-power"  aria-hidden="true"></i> Logout</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications"
                aria-expanded="false" data-animation="scale-up" role="button">
                <i class="icon md-notifications" aria-hidden="true"></i>
                <span class="badge badge-pill badge-danger up">5</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                <div class="dropdown-menu-header">
                  <h5>NOTIFICATIONS</h5>
                  <span class="badge badge-round badge-danger">New 5</span>
                </div>
    
                <div class="list-group">
                  <div data-role="container">
                    <div data-role="content">
                     
                    </div>
                  </div>
                </div>
                <div class="dropdown-menu-footer">
                  <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                    <i class="icon md-settings" aria-hidden="true"></i>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)" role="menuitem">
                    All notifications
                  </a>
                </div>
              </div>
            </li>
           
        
          </ul>
          <!-- End Navbar Toolbar Right -->
    
          <div class="navbar-brand navbar-brand-center">
            <router-link to="/">
            <span class="navbar-brand-logo navbar-brand-logo-normal" style="color:white">KEYSTAMP</span>
            <!--
              <img class="navbar-brand-logo navbar-brand-logo-normal" src="/static/assets/images/logo.png"
                title="Remark">
              <img class="navbar-brand-logo navbar-brand-logo-special" src="/static/assets/images/logo-colored.png"
                title="Remark">
                -->
            </router-link>
          </div>
        </div>
        <!-- End Navbar Collapse -->
    
        <!-- Site Navbar Seach -->
       
        <!-- End Site Navbar Seach -->
      </div>
    </nav>   
    <div class="site-menubar">
      <div class="site-menubar-header">
        <div class="cover overlay">
          <img class="cover-image" src="/static/assets//examples/images/dashboard-header.jpg"
            alt="...">
          <div class="overlay-panel vertical-align overlay-background">
            <div class="vertical-align-middle">
              <a class="avatar avatar-lg" href="javascript:void(0)">
                <img src="/static/assets/portraits/1.jpg" alt="">
              </a>
              <div class="site-menubar-info">
                <h5 class="site-menubar-user">{{user.name}}</h5>
                <p class="site-menubar-email">{{user.email}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>  <div class="site-menubar-body">
        <div>
          <div>
            <ul class="site-menu" data-plugin="menu">
              <li class="site-menu-item">
                <router-link  :to="{name:'welcome'}">
                        <i class="site-menu-icon md-view-dashboard" aria-hidden="true"></i>
                        <span class="site-menu-title">Dashboard</span>
                    </router-link>
              </li>
              <li class="site-menu-item has-sub active open">
                <a href="javascript:void(0)">
                        <i class="site-menu-icon md-view-compact" aria-hidden="true"></i>
                        <span class="site-menu-title">DayBooks</span>
                                <span class="site-menu-arrow"></span>
                    </a>
                <ul class="site-menu-sub">
                  <li class="site-menu-item active">
                    <router-link to="/dayBook/salesDayBook">
                      <span class="site-menu-title">Sales Day Book</span>
                    </router-link>
                  </li>
                   <li class="site-menu-item active">
                    <router-link to="/dayBook/purchasesDayBook">
                      <span class="site-menu-title">Purchases Day Book</span>
                    </router-link>
                  </li>
                   <li class="site-menu-item active">
                    <router-link to="/dayBook/salesReturns">
                      <span class="site-menu-title">Sales Returns</span>
                    </router-link>
                  </li>
                   <li class="site-menu-item active">
                    <router-link to="/dayBook/purchasesReturns">
                      <span class="site-menu-title">Purchases Returns</span>
                    </router-link>
                  </li>
                </ul>
             
              </li>
             
            </ul>      
            </div>
        </div>
      </div>
    </div>

</div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        data(){
            return{
                user:{
                    name:'',
                    email:''
                }
            }
        },
        computed:{
            ...mapState({
                 authStore : state => state.authStore
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('unsetUserObject')
                this.$router.push({name:'Login'})
            }
        },
        created(){
            this.user.name = this.authStore.authUser.name
            this.user.email = this.authStore.authUser.email
        }
    }
</script>
