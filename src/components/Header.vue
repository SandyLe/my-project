<template>
  <div id="app-header" style="margin-top: 0;border-bottom: 1px solid #E3E7EA; height: 114px;">
    <div style="width: 90%; margin:0 auto 0 auto">
      <div style="width: 200px; float:left;margin-top: 32px;">
        <div style="width: 50px;float:left;"><img src="../assets/wjlogo.jpg" style="width: 50px"/></div>
        <div style="width: 140px; float: left; font-family: '微软雅黑'; font-size: larger; font-weight: bolder; padding-left: 5px; color: #c40001">
          文疆厨卫体验店
          <br>
          WENJIANG
        </div>
      </div>
      <div style="float: right;">
        <app-dropDownMenu></app-dropDownMenu>
        <!--<ul style="list-style-type:none;">
          <li v-for="(item,index) in navData" :key="index" style="width:100px; float:left; padding-top: 45px;">
            <router-link to="/">{{item}}</router-link>
          </li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import DropDownMenu from './DropDownMenu.vue'
export default {
  name: 'app-header',
  components: {
    'app-dropDownMenu': DropDownMenu
  },
  data () {
    return {
      a: 'testData sandylee',
      navData: ['首页', '品牌', '公司简介', '新闻与观点', '电商店铺', '联系我们']
    }
  }
}
</script>

<style scoped>
  .menu ul li{
    list-style: none;
  }
</style>
