<template>
    <div>

                          <!-- Modal -->
                          <div class="modal fade" id="settingsSidebar" aria-hidden="true" aria-labelledby="examplePositionSidebar"
                            role="dialog" tabindex="-1">
                            <div class="modal-dialog modal-simple modal-sidebar modal-sm">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                  <h4 class="modal-title">Modal Title</h4>
                                </div>
                                <div class="modal-body">
                                  <div class="page-aside-inner page-aside-scroll">
          <div data-role="container">
            <div data-role="content">
              <section class="">
                <h5 class="page-aside-title">Main</h5>
                <div class="list-group">
                  <a class="list-group-item active" href="javascript:void(0)"><i class="icon md-view-dashboard" aria-hidden="true"></i>Overview</a>
                  <a class="list-group-item" href="javascript:void(0)"><i class="icon md-assignment" aria-hidden="true"></i>Receipts</a>
                  <a class="list-group-item" href="javascript:void(0)"><i class="icon md-assignment" aria-hidden="true"></i>Payments</a>
                  <a class="list-group-item" href="javascript:void(0)"><i class="icon md-folder" aria-hidden="true"></i>Receipts and Payments</a>
                </div>
              </section>
              <section class="">
                <h5 class="page-aside-title">Filter</h5>
                <div class="list-group">
                  <a class="list-group-item" href="javascript:void(0)"><i class="icon md-file" aria-hidden="true"></i>Income and Expenditure</a>
                  <a class="list-group-item" href="javascript:void(0)"><i class="icon md-file-text" aria-hidden="true"></i>Files</a>
                </div>
              </section>
            </div>
          </div>
        </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary btn-block">Print</button>
                                  <button type="button" class="btn btn-default btn-block btn-pure" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>

    </div>
</template>
<script>
    export default{

    }
</script>