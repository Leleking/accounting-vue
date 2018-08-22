import  Vue from 'vue'
import welcome from '@/components/welcome'
import Login from '@/components/auth/Login'
import DayBook from '@/components/dayBook/index'
import salesDayBook from '@/components/dayBook/salesDayBook'
import purchasesDayBook from '@/components/dayBook/purchasesDayBook'
import salesReturns from '@/components/dayBook/salesReturns'
import purchasesReturns from '@/components/dayBook/purchasesReturns'
import cashBook from '@/components/cashBook'
export const routes = [
    {path: '/',name: 'welcome',component: welcome,meta:{requiresAuth:true}},
    {path: '/cashBook',name: 'cashBook',component: cashBook,meta:{requiresAuth:true}},
    {path: '/dayBook',component:DayBook,meta:{requiresAuth:true},children:[
        {path:'salesDayBook',component:salesDayBook,name:'salesDayBook'},
        {path:'purchasesDayBook',component:purchasesDayBook,name:'purchasesDayBook'},
        {path:'purchasesReturns',component:purchasesReturns,name:'purchasesReturns'},
        {path:'salesReturns',component:salesReturns,name:'salesReturns'}
    ]},
    {path:'/Login',name:'Login',component:Login,meta:{bodyClass: '!animsition page-login-v2 layout-full page-dark',login:true}}
]
