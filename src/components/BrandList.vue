<template>
    <div id="brandList">
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <div class="brandContent">
        <div class="leftMenu">
          <div style="width: 100%;">产品分类</div>
          <div class="leftMenuContent">
            <ul>
              <li class="productTypeUL" v-for="(item,index) in productTypeList" :key="index">
                <div style="font-weight: bold; text-decoration: underline"><a href="javascript:void(0)" @click="getBrandList(item.productType.code)">{{item.productType.name}}</a></div>
                <div>
                  <ul>
                    <li class="brandUL" v-for="(item1,index1) in item.brandList" :key="index1">
                      <a style="font-size:14px" :href="'#/brand/' + item1.id">{{item1.name}}</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightContent">
          <ul>
            <li v-for="(item,index) in brandList" :key="index">
              <div class="brandName">{{item.name}}</div>
              <div v-if="item.imgUrl" class="brandImg">
                <img :src="item.imgUrl" width="100%" height="250px"/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

import {getSlidePics, getProductTypeList, getBrandList} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'brandList',
  data () {
    return {
      img: baseUrl + '../assets/hf.jpg',
      productTypeList: [],
      brandList: []
    }
  },
  methods: {
    getBrandList (code) {
      getBrandList(code).then(res => {
        this.brandList = res.data.data
      })
    }
  },
  mounted () {
    getSlidePics('CPPP', 1).then(res => {
      var datas = res.data.data
      this.img = datas[0]
    })
    getProductTypeList().then(res => {
      this.productTypeList = res.data.data
    })
    getBrandList().then(res => {
      this.brandList = res.data.data
    })
  }
}
</script>

<style scoped>
.brandContent{
  width: 90%;
  margin: 0 auto;
}
.leftMenu{
  width: 25%;
  float: left;
}
.rightContent{
  width: 75%;
  float: left;
}
.leftMenuContent{
  width: 99%;
  border: #ededed 1px solid;
}
.brandUL {
  margin: 5px;
  float: left;
}
.leftMenuContent ul li ul li a{
  color: #333333;
}
.leftMenuContent ul li ul li a:hover{
  text-decoration: underline;
  color: #CC5522;
}
.brandUL a:link{
  color: #888888;
}
.brandUL a:visited{
  color: #888888;
}
.productTypeUL {
  clear: both;
}
.leftMenuContent ul li div a{
  text-decoration: none;
  color: #CC5522;
}
.leftMenuContent ul li div a:hover{
  color: #CC5522;
}
.leftMenuContent ul li div a:link{
  color: #888888;
}
.leftMenuContent ul li div a:visited{
  color: #888888;
}
.brandContent li {
  list-style-type:none;
}
.brandName{
  text-align: center;
  line-height: 250px;
  background-color: #f2f2f2;
  width: 30%;
  float: left;
}
.brandImg{
  width: 60%;
  float: left;
  padding: 0 4%;
}
.rightContent ul li {
  padding: 4%;
  clear: both;
}
</style>
