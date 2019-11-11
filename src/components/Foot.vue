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
                <ul class="btn-list-area">
                  <li class="btn" v-for="(item1,index1) in item.children" :key="index1" >
                    <span v-if="item1.isOutSite"><a href="javascript:void(0)" @click="openOutSite(item1)" target="_blank">{{item1.name}}</a></span>
                    <span v-else><router-link :to="item1.url">{{item1.name}}</router-link></span>
                    <ul class="btn-list-area1">
                      <li class="btn" v-for="(item2,index2) in item1.children" :key="index2" >
                        <span v-if="item2.isOutSite"><a href="javascript:void(0)" @click="openOutSite(item2)" target="_blank">{{item2.name}}</a></span>
                        <span v-else><a href="#">{{item2.name}}</a></span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li><img src="../../static/WeChat.png"/></li>
            <li><img src="../../static/WeBo.png"/></li>
          </ul>
        </div>
      </div>
      <div class="foot-auth">
        <p style="width: 90%; margin: 0 auto; float: right"><img src="../assets/wjlogo.jpg" style="width: 50px; float: right"/>版权信息@上海文疆商贸·上海 <a href="http://www.beian.miit.gov.cn">沪ICP备19038640号</a>  2019.10.30</p>
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
