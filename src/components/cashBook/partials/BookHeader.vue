<template>
    <div>
         <div class="page-header">
        <h1 class="page-title"><slot></slot></h1>
        <div class="page-header-actions">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">CashBook</a></li>
            <li class="breadcrumb-item active">{{this.$route.name}}</li>
            <li>
              <button type="button" class="btn btn-sm btn-icon btn-primary btn-round" data-target="#settingsSidebar" data-toggle="modal"
            data-original-title="Setting">
            <i class="icon md-settings" aria-hidden="true"></i>
          </button>
            </li>
          </ol>
        </div>
      </div>
      <settings></settings>
    </div>
</template>
<script>
import settings from './settings'
    export default{
      components:{
        settings
      }
    }
</script>
