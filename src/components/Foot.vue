<template>
    <div>
      <div class="foot">
        <div class="foot-nav">
          <ul>
            <li v-for="(item,index) in menuData" :key="index">
              <div style="text-align: center; padding-bottom: 20px">
                <span v-if="item.isOutSite"><a href="javascript:void(0)" @click="openOutSite(item)" target="_blank">{{item.name}}</a></span>
                <span v-else><router-link :to="item.url">{{item.name}}</router-link></span>
              </div>
              <div class="foot-nav-block">
                <ul class="foot-btn-list-area">
                  <li v-for="(item1,index1) in item.children" :key="index1" >
                    <span v-if="item1.isOutSite"><a href="javascript:void(0)" @click="openOutSite(item1)" target="_blank">{{item1.name}}</a></span>
                    <span v-else><router-link :to="item1.url">{{item1.name}}</router-link></span>
                    <!--<ul class="btn-list-area1">
                      <li class="btn" v-for="(item2,index2) in item1.children" :key="index2" >
                        <span v-if="item2.isOutSite"><a href="javascript:void(0)" @click="openOutSite(item2)" target="_blank">{{item2.name}}</a></span>
                        <span v-else><a href="#">{{item2.name}}</a></span>
                      </li>
                    </ul>-->
                  </li>
                </ul>
              </div>
            </li>
            <!--<li><img src="../../static/WeChat.png"/></li>
            <li><img src="../../static/WeBo.png"/></li>-->
          </ul>
        </div>
      </div>
      <div class="foot-auth">
        <div style="width: 90%; margin: 0 auto; float: right; color:#939393;">
          版权@上海文疆商贸 * <a href="http://www.beian.miit.gov.cn">沪ICP备19038640号</a>
          <div style="width:300px;margin:0 auto; padding:0px 0;">
            <a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img src="../assets/gh.png" style="float:left;"/>
              <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31010602005204号</p>
            </a >
          </div>
          <div style="width: 90%; margin: -35px auto 0 auto; float: right"><img src="../assets/wjlogo.jpg" style="width: 50px; float: right"/></div>

        </div>
      </div>
    </div>
</template>

<script>
import {getMenuLevelFirst} from './../api/data'
export default {
  name: 'foot',
  data () {
    return {
      menuData: ['首页', '品牌', '公司简介', '新闻与观点', '电商店铺', '联系我们']
    }
  },
  methods: {
    openOutSite (item) {
      var tempwindow = window.open('_blank') // 先打开页面
      tempwindow.location = item.url // 后更改页面地址
    }
  },
  mounted () {
    getMenuLevelFirst().then(res => {
      this.menuData = res.data.data
    })
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
  clear: both;
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
  width: 50%;
  margin:0 auto;
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

.foot-nav-block{
  padding: 0;
}
.foot-nav-block ul li a {
  text-decoration: none;
}
.foot-nav-block ul {
  padding: 0;
  width: 100%;
}
.foot-nav-block ul li {
  width: 100%;
}
.foot-btn-list-area li{
  clear: both;
  margin: 0 auto;
  padding: 0;
}
.foot-auth a:hover {
  color:#939393;
}
.foot-auth a:link {
  color:#939393;
}
.foot-auth a:visited {
  color:#939393;
}
</style>
