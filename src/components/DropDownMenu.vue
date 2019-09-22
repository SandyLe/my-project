<template>
  <div id="menu" class = "menuClass">
    <ul class="btn-list-group">
      <li v-for="(item,index) in menuData" :key="index" style="width:100px; float:left; padding-top: 45px;text-align:center">
        <router-link to="/">{{item.name}}</router-link>
        <ul class="btn-list-area">
          <li class="btn" v-for="(item1,index1) in item.children" :key="index1" >
            <router-link to="/">{{item1.name}}</router-link>
            <ul class="btn-list-area1">
              <li class="btn" v-for="(item2,index2) in item1.children" :key="index2" ><a href="#">{{item2.name}}</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import {getMenuLevelFirst} from './../api/data'

export default {
  name: 'dropDownMenu',
  data () {
    return {
      activeIndex: 0,
      menuData: ['首页', '品牌', '公司简介', '新闻与观点', '电商店铺', '联系我们']
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
  .menuClass {
    display: inline-block;
  }
  .menuClass a {
    text-decoration: none;
  }

  .btn-list-group>li{
    position: relative;
    list-style-type:none;
  }
  .btn-list-area {
    display: none;
    position: absolute;

    right: 0;
    z-index: 999;
  }
  .btn-list-area1 {
    display: none;
    position: absolute;
    margin-left: 20px;
    margin-top: -20px;
    /*right: 0;*/
    z-index: 999;
  }
  .btn-list-area li:hover .btn-list-area1 {
    display: block;
  }
  .btn-list-group li:hover .btn-list-area {
    display: block;
  }
  .btn-list-area li {
    width: 70px;
    list-style-type:none;
  }
  .btn {
    /*display: inline-block;*/
    padding: .4em .7em;
    font-size: 14px;
    font-weight: 400;
    color: #6c757d;
    text-align: center;
    line-height: 1.5;
    background-color: rgba(255,255,255,0.2);
    /**border: 1px solid #e9ecef;**/
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
