/**
 * Created by Administrator on 2018/8/28 0028.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import store from '/src/Store'
//定义成全局的组件 能让所有的都能够用
Vue.component('HeaderTop', HeaderTop)

new Vue({
  el:'#app',
  render :h =>h(App),
  router ,//配置路由器
   store,//配置store对象 所有的组件都会多了个$store属性
})
