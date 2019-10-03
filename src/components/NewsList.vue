<template>
    <div id="brand">
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <div class="newsListNav">
        您所在位置：
      </div>
      <div class="newsListContent">
        <ul>
          <li v-for="(item,index) in brandList" :key="index">
            <div>
              <div class="contentUp">
                <img :src="item.imgUrl" height="150px"/>
              </div>
              <div class="contentDown">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}<a href="/">...>>查看详情</a></p>
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
  methods: {
    changepage () {}
  },
  mounted () {
    var newsType = this.$route.params.code
    getSlidePics(newsType, 1).then(res => {
      var datas = res.data.data
      if (datas.length === 0) {
        datas[0] = '/upload/CPPP/1570070012464-990185544.jpg'
      }
      this.img = baseUrl + datas[0]
    })
    getBrandList().then(res => {
      this.brandList = res.data.data
      this.brandList.forEach(function (e) {
        e.imgUrl = baseUrl + e.imgUrl
      })
    })
  }
}
</script>

<style scoped>
.newsListContent{
  width: 90%;
  margin: 0 auto;
  overflow: auto;
}
.newsListNav{
  width: 90%;
  margin: 0 auto;
  font-size: 12px;
  border-bottom: 1px solid #CDCDCD;
}
.newsListContent li {
  width: 30%;
  height: 400px;
  float:left;
  list-style-type:none;
  overflow: auto;
  padding: 1%
}
.newsListContent li img{
  margin-top: 10px;
 }
.contentUp{
  border: 1px solid #CDCDCD;
  width: inherit;
  height: inherit;
  text-align: center;
  padding:20px;
}
.contentDown{
  width: 100%;
  text-align: center;
  float: left;
  height: 150px;
  border: 1px dotted #CDCDCD;
}
.brandContent h4 {
  margin-top: 100px;
}
</style>
