<template>
  <div>
    <!--//形成组件标签 但这只是静态的路由组件标签-->
    <router-view ></router-view >
    <!--<login></login>-->
    <FooterGuide />
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//  import Login from './pages/Login/login.vue'
  export default {
    data (){
        return {}
      },
//映射成组件
  components:{
    FooterGuide,
//    Login
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
