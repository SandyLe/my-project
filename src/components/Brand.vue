<template>
    <div id="brand">
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <div class="brandContent">
        <ul>
          <li v-for="(item,index) in brandList" :key="index">
            <div v-if="index % 2 === 0">
              <div class="contentLeft">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
              </div>
              <div class="contentRight"><img :src="item.imgUrl"/></div>
            </div>
            <div v-else>
              <div class="contentLeft"><img :src="item.imgUrl"/></div>
              <div class="contentRight">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

import {getSlidePics, getBrandList} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'brand',
  data () {
    return {
      img: baseUrl + '../assets/hf.jpg',
      brandList: [{
        name: '品牌名称',
        description: 'ping pai 简介，介绍……',
        imgUrl: baseUrl + '/upload/QYFC/1569998168630-35457943.jpg'
      }, {
        name: '品牌名称',
        description: 'ping pai 简介，介绍……',
        imgUrl: baseUrl + '/upload/QYFC/1569998168630-35457943.jpg'
      }]
    }
  },
  mounted () {
    getSlidePics('CPPP', 1).then(res => {
      var datas = res.data.data
      this.img = datas[0]
    })
    getBrandList().then(res => {
      this.brandList = res.data.data
      this.brandList.forEach(function (e) {
        e.imgUrl = e.imgUrl
      })
    })
  }
}
</script>

<style scoped>
.brandContent{
  width: 90%;
  margin: 0 auto;
}
.brandContent li {
  list-style-type:none;
  overflow: auto;
  border-top: 1px solid #CDCDCD;
}
.brandContent li img{
  margin-top: 10px;
 }
.contentLeft{
  margin: 0 auto;
  width: 50%;
  text-align: center;
  float: left;
}
.contentRight{
  width: 50%;
  text-align: center;
  float: left;
}
.brandContent h4 {
  margin-top: 100px;
}
</style>
