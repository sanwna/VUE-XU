/**
 * Created by Administrator on 2018/8/28 0028.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/login.vue'
//声明使用vue-router

Vue.use(VueRouter)
//配置各个页面的路由 要跳转的路由
export default new VueRouter({
  routes: [
    {
      path:'/msite',
      component:MSite
    },

    {
      path:'/order',
      component:Order
    },

    {
      path:'/profile',
      component:Profile
    },

    {
      path:'/search',
      component:Search
    },
    {
      path:'/login',
      component:Login
    }

  ]

})


