<template>
    <div>
         <div class="page-header">
        <h1 class="page-title"><slot></slot></h1>
        <div class="page-header-actions">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">Day Book</a></li>
            <li class="breadcrumb-item active">{{this.$route.name}}</li>
          </ol>
        </div>
      </div>
    </div>
</template>
<script>
    export default{

    }
</script>
