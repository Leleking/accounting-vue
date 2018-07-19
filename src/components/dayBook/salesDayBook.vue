<template>
  <div>
     <div class="page">
      <div class="page-header">
        <h1 class="page-title">{{this.$route.name}}</h1>
        <div class="page-header-actions">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">Tables</a></li>
            <li class="breadcrumb-item active">Basic</li>
          </ol>
        </div>
      </div>
      <!-- Panel Table Example1 Report -->
      <div class="row">
        <div class="col-md-4">
          test
        </div>
        <div class="col-md-8">
        <div class="panel" id="exampleReport">
          <div class="panel-body">
            <div class="panel-heading">
              <h4 class="panel-title">23 Reports</h4>
              <div class="panel-actions">
                <a class="panel-action icon md-edit" data-toggle="tooltip" data-original-title="edit"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-mail-reply" data-toggle="tooltip" data-original-title="send"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-delete" data-toggle="tooltip" data-original-title="move to trash"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-account" data-toggle="tooltip" data-original-title="uesrs"
                  data-container="body" title=""></a>
              </div>
            </div>
            <div class="example-wrap">
              <div class="example">
                <div class="table-responsive">
                  <table class="table table-hover" data-role="content" data-plugin="selectable" data-row-selectable="true">
                    <thead class="bg-grey-100">
                      <tr>
                        <th>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-all" type="checkbox">
                            <label></label>
                          </span>
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Description
                        </th>
                        <th>
                          <i class="icon md-favorite" aria-hidden="true"></i>
                        </th>
                        <th>
                          <i class="icon md-comment" aria-hidden="true"></i>
                        </th>
                        <th>
                          Date Created
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">Last quarter revene</a>
                          <i
                            class="icon md-help ml-10 red-600" aria-hidden="true"
                            data-toggle="tooltip" data-original-title="help" data-container="body"
                            title=""></i>
                        </td>
                        <td>Revene for last quarter in state America for year 2013,
                          whith...</td>
                        <td>
                          <i class="icon md-favorite" aria-hidden="true"><span class="ml-5">5</span></i>
                        </td>
                        <td>
                          <i class="icon md-comment" aria-hidden="true"><span class="ml-5">22</span></i>
                        </td>
                        <td>
                          <span>6 minets ago</span>
                          <i class="icon md-time ml-10" aria-hidden="true"></i>
                        </td>
                        <td>
                          <img class="avatar avatar-sm" src="assets/portraits/1.jpg" data-toggle="tooltip"
                            data-original-title="Crystal Bates" data-container="body"
                            title="">
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">Expenses in 2013</a><i class="icon md-help ml-10 primary-600"
                            aria-hidden="true" data-toggle="tooltip" data-original-title="help"
                            data-container="body" title=""></i></td>
                        <td>Revene for last quarter in state America.</td>
                        <td>
                          <i class="icon md-favorite" aria-hidden="true"><span class="ml-5">8</span></i>
                        </td>
                        <td>
                          <i class="icon md-comment" aria-hidden="true"><span class="ml-5">15</span></i>
                        </td>
                        <td>
                          <span>2 hourss ago</span>
                          <i class="icon md-time ml-10" aria-hidden="true"></i>
                        </td>
                        <td>
                          <img class="avatar avatar-sm" src="/static/assets/portraits/2.jpg" data-toggle="tooltip"
                            data-original-title="Maxime" data-container="body" title="">
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">Accounting </a><i class="icon md-help ml-10 green-600"
                            aria-hidden="true" data-toggle="tooltip" data-original-title="help"
                            data-container="body" title=""></i></td>
                        <td>Text example here lorem ipsum</td>
                        <td>
                          <i class="icon md-favorite" aria-hidden="true"><span class="ml-5">2</span></i>
                        </td>
                        <td>
                          <i class="icon md-comment" aria-hidden="true"><span class="ml-5">36</span></i>
                        </td>
                        <td>
                          <span>5 hours ago</span>
                          <i class="icon md-time ml-10" aria-hidden="true"></i>
                        </td>
                        <td>
                          <img class="avatar avatar-sm" src="/static/assets/portraits/3.jpg" data-toggle="tooltip"
                            data-original-title="Hammes" data-container="body" title="">
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">Srtarbucks orders</a><i class="icon md-help ml-10 blue-600"
                            aria-hidden="true" data-toggle="tooltip" data-original-title="help"
                            data-container="body" title=""></i></td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>
                          <i class="icon md-favorite" aria-hidden="true"><span class="ml-5">4</span></i>
                        </td>
                        <td>
                          <i class="icon md-comment" aria-hidden="true"><span class="ml-5">31</span></i>
                        </td>
                        <td>
                          <span>12 hours ago</span>
                          <i class="icon md-time ml-10" aria-hidden="true"></i>
                        </td>
                        <td>
                          <img class="avatar avatar-sm" src="/static/assets/portraits/4.jpg" data-toggle="tooltip"
                            data-original-title="Air Conditioner" data-container="body"
                            title="">
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">In Progress</a><i class="icon md-help ml-10 orange-600"
                            aria-hidden="true" data-toggle="tooltip" data-original-title="help"
                            data-container="body" title=""></i></td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>
                          <i class="icon md-favorite" aria-hidden="true"><span class="ml-5">5</span></i>
                        </td>
                        <td>
                          <i class="icon md-comment" aria-hidden="true"><span class="ml-5">18</span></i>
                        </td>
                        <td>
                          <span>3 days ago</span>
                          <i class="icon md-time ml-10" aria-hidden="true"></i>
                        </td>
                        <td>
                          <img class="avatar avatar-sm" src="/static/assets/portraits/5.jpg" data-toggle="tooltip"
                            data-original-title="Milk Powder" data-container="body"
                            title="">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        <!-- End Panel Table Example1 Report-->
    <!-- End Page -->
     </div>
  </div>
</template>

<script>
import rightAside from './aside/rightAside'
    export default{
      components:{
        rightAside
      },
      data(){
        return{
          componentId:""

        }
      }
    }
</script>