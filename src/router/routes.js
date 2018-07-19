import  Vue from 'vue'
import welcome from '@/components/welcome'
import Login from '@/components/auth/Login'
import salesDayBook from '@/components/dayBook/salesDayBook'
export const routes = [
    {path: '/',name: 'welcome',component: welcome,meta:{requiresAuth:true}},
    {path: '/dayBook/salesDayBook',name: 'salesDayBook',component: salesDayBook,meta:{requiresAuth:true}},
    {path:'/Login',name:'Login',component:Login,meta:{bodyClass: '!animsition page-login-v2 layout-full page-dark',login:true}}
]
