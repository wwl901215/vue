<template>
  <div id="FirstPage">
    <div>这里是first页面</div>
    <p>{{message}}</p>
    <div>
      <router-link :to="{name:'phonename',params:{userId:485}}">手机</router-link>
      <router-link to="/Holle/tablet">平板</router-link>
      <router-link to="/Holle/computer">电脑</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '我是FirstPage'
      }
    }
  }
</script>
<style>
  #FirstPage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 40px;
  }
</style>

