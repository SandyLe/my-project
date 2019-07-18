<template>
  <div id="indexProducts">
    <ul>
      <li><img src="../../static/pro1.jpg"/></li>
      <li><img src="../../static/pro2.jpg"/></li>
      <li><img src="../../static/pro3.jpg"/></li>
      <li><img src="../../static/pro1.jpg"/></li>
      <li><img src="../../static/pro2.jpg"/></li>
      <li><img src="../../static/pro3.jpg"/></li>
    </ul>
    HIJIJIJIJIJIJIJIJIJIJIJIJIJIJIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIJIJIJIJIJIJIJIJIJJI
  </div>
</template>

<script>
export default {
  name: 'IndexProducts'
}
</script>

<style scoped>
#indexProducts{
  width: 90%;
  margin: 0 auto;
}
#indexProducts ul{
  width: inherit;
  background: #42b983;
}
#indexProducts ul li {
  width: 30%;
  margin-left: 3.3%;
  position: relative;
  list-style-type: none;
  float: left;
  padding-top: 20px;
}
#indexProducts ul li>img{
  width: 100%;
  height: 400px;
  border:1px solid darkgray;
  box-shadow: 2px 4px 5px darkgray;
  border-radius: 5px;
}
#indexProducts ul li>img:hover{
  border: burlywood 1px solid;
  box-shadow: 4px 6px 10px burlywood;
}
</style>
