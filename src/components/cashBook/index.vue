<template>
    <div class="page">
    <BookHeader></BookHeader>
        <div class="panel">
          <header class="panel-heading">
            <h3 class="panel-title">Add Row</h3>
          </header>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-15">
                  <button id="addToTable" class="btn btn-primary" type="button">
                    <i class="icon md-plus" aria-hidden="true"></i> Add row
                  </button>
                </div>
              </div>
            </div>
             <form>
             <div class="row">
                
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">Date<span style="color:red">*</span></label>
                                <input class="form-control" type="date" name="item" v-validate="'required'" value="" placeholder="Item">
                                <span style="color:red"><small>{{ errors.first('item') }}</small></span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">Details<span style="color:red">*</span></label>
                                <input class="form-control" type="text" name="item" v-validate="'required'" value="" placeholder="Item">
                                <span style="color:red"><small>{{ errors.first('item') }}</small></span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">Amount<span style="color:red">*</span></label>
                                <input class="form-control" type="number" any="any" v-validate="'required'"  name="balance"  value="">
                                <span style="color:red"><small>{{ errors.first('balance') }}</small></span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">Type<span style="color:red">*</span></label>
                                <select name="type" class="form-control" data-live-search="true" id="">
                                    <option value="0">Sales</option>
                                    <option value="1">Debtor</option>
                                </select>
                                <span style="color:red"><small>{{ errors.first('type') }}</small></span>
                            </div>
                        </div>
                       
                    </div>
                     </form>
          </div>
        </div>
         <div class="panel">
          <header class="panel-heading">
            <h3 class="panel-title">
              Receipts & Payments
            </h3>
          </header>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered" data-plugin="floatThead">
                <thead>
                  <tr>
                    <th colspan="6">Receipts</th>
                    <th colspan="4">Payments</th>
                   
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th></th>
                    <th>Load Id</th>
                    <th>Date</th>
                    <th>Details </th>
                    <th>V_no</th>
                    <th>Amount</th>
                     <th>Load Id</th>
                     <th>Date</th>
                    <th>Details </th>
                    <th>V_no</th>
                    <th>Amount</th>
                   
                  </tr>
                </thead>
                <tbody aria-relevant="all" aria-live="polite">
                  <tr class="even">
                    <td><i class="icon md-lock" aria-hidden="true"></i></td>
                    <td>
                      02145
                    </td>
                    <td>
                      <div class="text-warning time-from-now">2 minutes ago</div>
                    </td>
                    <td>Unloading</td>
                    <td>
                      <h5>Brigton, VA</h5>
                      <small>11/22/13 | 14:44 - 16:50 ET</small>
                    </td>
                    <td>
                      <h5>Brigton, VA</h5>
                      <small>5/9/13 | 15:45 - 18:40 ET</small>
                    </td>
                    <td>
                      <h5>Fat Frank</h5>
                      <small>(123) 456-7890</small>
                    </td>
                    <td>
                      <h5>Reliable Trucking</h5>
                      <small>Apple Computer</small>
                    </td>
                  </tr>
                  <tr class="odd">
                    <td><i class="icon md-lock" aria-hidden="true"></i></td>
                    <td>
                      0124
                    </td>
                    <td>
                      <div class="text-warning time-from-now">36 minutes ago</div>
                    </td>
                    <td>Booked</td>
                    <td>
                      <h5>Plum Island, NH</h5>
                      <small>6/22/13 | 15:22 - 20:29 ET</small>
                    </td>
                    <td>
                      <h5>Plum Island, NH</h5>
                      <small>5/17/13 | 18:31 - 16:49 ET</small>
                    </td>
                    <td>
                      <h5>Some Dude</h5>
                      <small>(123) 456-7890</small>
                    </td>
                    <td>
                      <h5>RR Donnely</h5>
                      <small>Pepsi Co</small>
                    </td>
                  </tr>
                  <tr class="even">
                    <td></td>
                    <td>
                     02156
                    </td>
                    <td>
                      <div class="text-warning time-from-now">an hour ago</div>
                    </td>
                    <td>Booked</td>
                    <td>
                      <h5>Pooville, CA</h5>
                      <small>7/18/13 | 18:48 - 22:22 ET</small>
                    </td>
                    <td>
                      <h5>Brigton, VA</h5>
                      <small>6/23/13 | 18:29 - 15:35 ET</small>
                    </td>
                    <td>
                      <h5>Mike Mikelson</h5>
                      <small>(123) 456-7890</small>
                    </td>
                    <td>
                      <h5>AAA Trucking</h5>
                      <small>Apple Computer</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- End Panel Example 1 -->
        
    </div>
</template>
<script>
import BookHeader from './partials/BookHeader'
import {addCash} from '../../config'
import {mapState} from 'vuex'
    export default{
      components:{
        BookHeader
      },
        methods:{
            test(){
                alert()
            }
        },
        data(){
            return{
            }
        },
        created(){
            const postData = {}
            postData.details = 'simeon'
            postData.date_added ='2009-05-02'
            postData.url = addCash
           var cash = this.$store.dispatch('postReqData',postData)
           console.log(cash)
        }
    }
</script>
<style>
input.default{
    border:none;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}
input.default:hover{
    background-color:ghostwhite;
}
 
</style>
