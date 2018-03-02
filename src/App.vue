<template>
  <div id="appp">
    <img src="./assets/logo.png">
    <router-link to="/FirstPage">FirstPage</router-link>
    <router-link to="/Hello">Hello</router-link>
    <router-link to="/User/123/aaa">User123</router-link>
    <router-link to="/User/456/bbb">User456</router-link>
    <router-view></router-view>
    <p>lksjdlfkjwikejfofi</p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#appp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
