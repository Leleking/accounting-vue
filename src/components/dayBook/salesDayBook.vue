
      <template>
      <div class="row">
        <div class="col-md-4">
          <div class="panel" id="exampleReport">
          <div class="panel-body">
            <div class="panel-heading">
              <h4 class="panel-title">Add Sale</h4>
            </div>
            <div class="example-wrap">
              <div class="example">
                <div class="row">
                  <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Item<span style="color:red">*</span></label>
                                <input class="form-control" type="text" name="item" v-model="postData.item" v-validate="'required'" value="" placeholder="Item">
                                <span style="color:red"><small>{{ errors.first('item') }}</small></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Date<span style="color:red">*</span></label>
                                <input class="form-control" type="date" v-validate="'required'"  name="date" v-model="postData.date_added" value="">
                                <span style="color:red"><small>{{ errors.first('date') }}</small></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Units<span style="color:red">*</span></label>
                                <input class="form-control" v-validate="'required'"  type="number" v-model="postData.units" name="units" value="1" placeholder="item">
                                <span style="color:red"><small>{{ errors.first('units') }}</small></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Amount<span style="color:red">*</span></label>
                                 <input class="form-control" v-validate="'required'" type="text" v-model="postData.amount" name="amount" value="" placeholder="amount">
                                <span style="color:red"><small>{{ errors.first('amount') }}</small></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">Details</label>
                                <textarea  class="form-control" type="text" v-model="postData.details" value="" placeholder="details"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" @click="postDaybookData(sales)">Submit</button>
                      </div>
                  </form>
                </div>
               </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-md-8">
        <div class="panel" id="exampleReport">
          <div class="panel-body">
            <div class="panel-heading">
              <h4 class="panel-title">Recent transactions</h4>
              <div class="panel-actions">
                <a class="panel-action icon md-edit" data-toggle="tooltip" data-original-title="edit"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-mail-reply" data-toggle="tooltip" data-original-title="send"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-delete" data-toggle="tooltip" data-original-title="move to trash"
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
                          Items
                        </th>
                        <th>
                          Amount
                        </th>
                        <th>
                         Details <i class="icon md-comment" aria-hidden="true"></i>
                        </th>
                        <th>
                          Units
                        </th>
                        <th>
                          Date
                        </th>
                        <th><a class="panel-action icon md-account" data-toggle="tooltip" data-original-title="uesrs"
                  data-container="body" title=""></a> User</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                    
                        <td colspan="8" v-show="loading">
                              <div class="example-loading example-well h-150 vertical-align text-center">
                                <div class="loader vertical-align-middle loader-cube-grid"></div>
                              </div>
                        </td>
                        
                      </tr>
                      <tr v-for="sale in recentData ">
                        <td>
                          <span class="checkbox-custom checkbox-primary">
                            <input class="selectable-item" type="checkbox">
                            <label></label>
                          </span>
                        </td>
                        <td><a href="javascript:void(0)">{{sale.item}}</a>
                          <i
                            class="icon md-help ml-10 red-600" aria-hidden="true"
                            data-toggle="tooltip" data-original-title="help" data-container="body"
                            title=""></i>
                        </td>
                        <td>GHC{{sale.amount}}</td>
                        <td>
                        <span class="ml-5">{{sale.details}}</span></i>
                        </td>
                        <td>
                        <span class="ml-5">{{sale.units}}</span></i>
                        </td>
                        <td>
                          <span>{{sale.date_added}}</span>
                        </td>
                        <td>
                          {{sale.user}}
                        </td>
                        <td> <a class="panel-action icon md-edit" data-toggle="tooltip" data-original-title="edit"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-mail-reply" data-toggle="tooltip" data-original-title="send"
                  data-container="body" title=""></a>
                <a class="panel-action icon md-delete" data-toggle="tooltip" data-original-title="move to trash"
                  data-container="body" title=""></a></td>
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
</template>
<script>


import {toast,dayBookMixin} from '../../mixins/'
import {getSales} from '../../config'
export default{
    data(){
      return{
        sales:getSales,
      }
    },
    mixins:[dayBookMixin,toast],
    created(){
      this.getRecentData(getSales);
      
    }
    
  }
</script>
      
      