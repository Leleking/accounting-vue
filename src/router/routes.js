import  Vue from 'vue'
import welcome from '@/components/welcome'
import Login from '@/components/auth/Login'
export const routes = [
    {path: '/',name: 'welcome',component: welcome,meta:{requiresAuth:true}},
    {path:'/Login',name:'Login',component:Login}
]
