<template>
    <div>
      <div class="foot">
        <div class="foot-nav">
          <ul>
            <li v-for="(item,index) in menuData" :key="index">
              <div style="text-align: center; padding-bottom: 20px">
                <router-link to="/">{{item}}</router-link>
              </div>
              <div class="foot-nav-block">
                <ul>
                  <li><a href="#">二级导航</a></li>
                  <li><a href="#">二级导航</a></li>
                  <li><a href="#">二级导航</a></li>
                  <li><a href="#">二级导航</a></li>
                  <li><a href="#">二级导航</a></li>
                  <li><a href="#">二级导航</a></li>
                </ul>
              </div>
            </li>
            <li><img src="../../static/WeChat.png"/></li>
            <li><img src="../../static/WeBo.png"/></li>
          </ul>
        </div>
      </div>
      <div class="foot-auth">
        <p style="width: 90%; margin: 0 auto; float: right"><img src="../assets/wjlogo.jpg" style="width: 50px; float: right"/>版权信息@上海文疆商贸·上海 备案号：2323232332  2019.07.01</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      menuData: ['首页', '品牌', '公司简介', '新闻与观点', '电商店铺', '联系我们']
    }
  }
}
</script>

<style scoped>
.foot{
  position:relative;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #CDCDCD;
  padding-top: 30px;
}

.foot-nav-block ul li{
  font-size: 12px;
  float: none;
  list-style: none;
  margin: 0 auto;
}
.foot-nav{
  position: relative;
  height: 200px;
}
.foot-nav ul{
  float:right;
}
.foot-nav ul li{
  float: left;
  list-style: none;
  width: 100px;
  text-align: center;
  font-size: 14px;
}
.foot-auth{
  position: relative;
  border-top: 1px solid #CDCDCD;
  height: 20px;
  text-align: center;
  font-size: 10px;
  margin-top: 20px;
}

.foot-nav-block ul li a {
  text-decoration: none;
}
</style>
