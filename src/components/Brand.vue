<template>
    <div id="brand">
      <app-slider v-bind:slidersTData="slidersTData" v-bind:imgHeight="imgHeight" v-bind:imgSize="imgSize"></app-slider>
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <app-products v-bind:hotproductList="hotproductList"></app-products>
      <app-scrollview></app-scrollview>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import ScrollView from './SV01'
import IndexProducts from './IndexProducts'
import {getOneData, getBrandList, getHotProductList} from './../api/data'
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
      img: '',
      sliders: [],
      imgSize: 0,
      imgHeight: 0,
      imgRealWidth: 0,
      imgRealHeight: 0,
      imgWidth: document.body.clientWidth,
      hotproductList: []
    }
  },
  components: {
    'app-slider': Slider,
    'app-products': IndexProducts,
    'app-scrollview': ScrollView
  },
  mounted () {
    var id = this.$route.params.id
    getOneData('brand', id).then(res => {
      this.img = res.data.data.introduction
      var datas = res.data.data.imgs.split(';')
      var imgs = new Array(datas.length)
      for (var i = 0; i < datas.length; i++) {
        imgs[i] = {'img': datas[i]}
      }
      this.slidersTData = imgs
      this.imgSize = datas.length
      if (this.imgSize > 0) {
        var img = new Image()
        img.src = imgs[0].img
        img.onload = () => {
          this.imgRealWidth = img.width
          this.imgRealHeight = img.height
          this.imgHeight = this.imgRealHeight * this.imgWidth / this.imgRealWidth
        }
      }
      const that = this
      getHotProductList(6, res.data.data.code).then(ress1 => {
        const dataList = ress1.data.data
        const urlArray = []
        dataList.forEach(function (e) {
          if (e.imgUrl && e.imgUrl !== '') {
            e.imgUrl = e.imgUrl
            urlArray[urlArray.length] = e
          }
        })
        that.hotproductList = urlArray
      })
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
