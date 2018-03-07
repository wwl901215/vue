<template>
  <div id="FirstPage" marginheight="0px" marginwidth="0px">
    <p>{{message}}</p>
    <table width="100%" height="300px" style="background-color:#818">
      <tr>
        <td colspan="2" width="100%" height="40%" style="background-color:red" >head</td>
      </tr>
      <tr>
          <td width="50%" height="60%" style="background-color:green" >left</td>
          <td width="50%" height="60%" style="background-color:blue" >right</td>
        </tr>
    </table>
    <br/>
    <form>

      用户名：<input type="text"/>
      <br/>
      密码：<input type="password"/>
      <br/>
      复选框；<input type="checkbox"/>
      <br/>
      男：<input type="radio" name="sex"/>
      女：<input type="radio" name="sex"/>
      <br/>
      <select>
        <option>aaa</option>
        <option>aaa</option>
        <option>aaa</option>
        </select>
    </form>
    <textarea cols="20" rows="20">
      请填写相关信息
    </textarea>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '用table实现布局'
      }
    }
  }
</script>

