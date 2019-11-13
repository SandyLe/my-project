<template>
    <div id="brand">
      <app-slider v-bind:sliders="sliders" v-bind:imgHeight="imgHeight" v-bind:imgSize="imgSize"></app-slider>
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
      <app-scrollview></app-scrollview>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import ScrollView from './SV01'
import {getOneData, getBrandList} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'brand',
  data () {
    return {
      brandList: [{
        name: '品牌名称',
        description: 'ping pai 简介，介绍……',
        imgUrl: baseUrl + '/upload/QYFC/1569998168630-35457943.jpg'
      }, {
        name: '品牌名称',
        description: 'ping pai 简介，介绍……',
        imgUrl: baseUrl + '/upload/QYFC/1569998168630-35457943.jpg'
      }],
      sliders: [],
      imgSize: 0,
      imgHeight: 0,
      imgRealWidth: 0,
      imgRealHeight: 0,
      imgWidth: document.body.clientWidth
    }
  },
  components: {
    'app-slider': Slider,
    'app-scrollview': ScrollView
  },
  mounted () {
    var id = this.$route.params.id
    getOneData('brand', id).then(res => {
      var datas = res.data.data.imgs.split(';')
      var imgs = new Array(datas.length)
      for (var i = 0; i < datas.length; i++) {
        imgs[i] = {'img': datas[i]}
      }
      this.sliders = imgs
      this.imgSize = datas.length
      if (this.imgSize > 0) {
        var img = new Image()
        img.src = imgs[0].img
        if (img.complete) {
          this.imgRealWidth = img.width
          this.imgRealHeight = img.height
          this.imgHeight = this.imgRealHeight * this.imgWidth / this.imgRealWidth
        }
      }
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
