<template>
  <div id="FirstPage">
    <div>这里是User页面</div>
    <p>message:{{message}}</p>
    <p>getDateFromRoute:{{getDateFromRoute}}</p>
    <input id="inputid" placeholder="元史之" style="width: 200px; height: 50px; font-size: 40px"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: '我是User'
      }
    },
    computed: {
      getDateFromRoute () {
        return this.$route.params.id
      }
    },
    watch: {
      $route (to, from) {
        console.log(to)
        console.log(from)
        this.message = to.params.id
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

