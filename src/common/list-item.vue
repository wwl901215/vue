<!--https://www.cnblogs.com/lanchar/p/6894167.html-->
<template id="listitem">
  <li>{{name}}</li>
</template>
<script>
  export default {
    data: function () {
      return {
        name: '我是User'
      }
    },
    props: {
      name: String
    }
  }
</script>

