import vue from 'vue'
const state = {
    reqData:{

    }
}
const mutations = {
    SET_REQ_DATA(state,reqObj){
        state.reqData = reqObj
    }
}
const actions = {
    postReqData:({commit},reqDataObj)=>{
    commit('SET_REQ_DATA',reqDataObj)
   return vue.http.post(reqDataObj.url,state.reqData).then((response)=>{
    return response
        }).catch((error)=>{
            return error
        })
    }
}

export default{
    state,mutations,actions
}