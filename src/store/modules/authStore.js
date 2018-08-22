import { clientId,clientSecret} from  '../../../env.js'
import {loginUrl} from '../../config'
import Vue from 'vue'
const state = {
    authUser: null,
    postData:{

    }
}
const getters= {
    routeLoad: state => {
      return state.authUser;
    }
}
const mutations ={
    SET_AUTH_USER(state,userObj){
        state.authUser = userObj
    },
    HANDLE_LOGIN_SUBMIT(state,user){
        state.postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username:user.email,
        password:user.password,
        scope:''
        }
    },
    UNSET_AUTH_USER(state){
        state.authUser = ''
    }
}
const actions = {
    setUserObject:({commit},userObj) => {
        commit('SET_AUTH_USER',userObj)
    },
    validateUser:({commit},user) => {
        return commit('HANDLE_LOGIN_SUBMIT',user)
    },
    unsetUserObject: ({commit}) => {
        commit('UNSET_AUTH_USER')
        window.localStorage.removeItem('authUser')
    }
}
export default{
    state,mutations,actions,getters
}