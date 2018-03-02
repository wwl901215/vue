<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div><video id="media" controls  src="http://domhttp.kksmg.com/2017/09/11/ocj_800k_238884fc39f052fdd5b0ba57b0baa778.mp4" poster="http://static.statickksmg.com/image/2017/09/11/c100bfb6931db538db1044a6f3854022.jpg"/></div>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a class="li" href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 class="li-second-item">Ecosystem <h3><em> 这里是em标签，用来测试后代选择器</em></h3></h2>
    <ul>
      <li><a id="li-first-item" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a class="li-second-item" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a name="aaa" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div id="test-bg">
      <h1>This is <strong>very</strong> <strong>very</strong> important.</h1>
      <h1>This is <em>really <strong>very</strong></em> important.</h1>
    </div>
    <h2>下面是对段落的应用</h2>
    <div class="div-test">
      <P style= "text-align: left; text-indent: 2em; font-size: 12px;">
        离开家我IE兼容 i 我就饿哭我；科技我， <span id="span">方品味咖啡配围巾仿佛我啦今晚家乐福</span>看我可否借我IE家我发<span>我IE家放完假诶附加费我</span>觉IE发我饿可分解哦 i 我就饿佛为 i 俄方解决，；i 减肥我诶家。。。
      </P>
      <p id="single-line">lwiefojowiejffowiejfowijefoiwjefigoeijrgioejrgoiejrogjeorgijeoirj</p>
    </div>
    <a  href="https://www.baidu.com" target="_self">众里寻她千百度</a>
    <div class="div-test">
      <div style="width: 100px; height: 100px; background-color: red;"/>
      <div style="width: 100px; height: 100px; background-color: green; position: relative; left:10px ;"/>
      <div style="width: 100px; height: 100px; background-color: blue"/>
      <div style="width: 100px; height: 100px; background-color: black"/>
    </div>
    <span v-bind:title="msg">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  border-width: thick;
  border: solid;
  padding:4px;
  border-color: antiquewhite;
  border-radius:10px;
}

a {
  color: #42b983;
  visited:#888
}
#li-first-item {
  color: red;
}
.li-second-item {
  color: aqua;
}
[name] {
  color: blue;
}
#media {
  width: 500px;
  height: 500px;
}
h2 em {
  color: #246;
  font-size: 20px;
}
h1 > strong {color:red;}
#test-bg {
  margin: 40px;
  background: url("http://static.statickksmg.com/image/2017/09/11/c100bfb6931db538db1044a6f3854022.jpg");
}
p {
  font-family: "Monospace";
}
p span {
  color: #191;
  font-family: "Monospace";
  font-style: italic;
  font-weight:bold;
}
  #single-line {
    width: 245px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 40px;
  }
/*a:link {color:#FF0000;}    !* 未被访问的链接 *!*/
a:visited {color:#00FF00;} /* 已被访问的链接 */
a:hover {color:#FF00FF;}   /* 鼠标指针移动到链接上 */
a:active {color:#0000FF;}  /* 正在被点击的链接 */
  .div-test {
    width:100%;
    height:auto;
    text-align: left;
    flex-direction: row;
    display: flex;
  }
</style>
