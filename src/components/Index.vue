<template>
    <div id = "index">
      <app-slider v-bind:sliders="sliders" v-bind:imgHeight="imgHeight" v-bind:imgSize="imgSize"></app-slider>
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <app-products></app-products>
      <app-scrollview></app-scrollview>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import IndexProducts from './IndexProducts'
import ScrollView from './SV01'
import {getSlidePics} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

export default {
  name: 'index',
  data () {
    return {
      img: baseUrl + '../assets/hf.jpg',
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
    'app-products': IndexProducts,
    'app-scrollview': ScrollView
  },
  mounted () {
    getSlidePics('HFGG', 1).then(res => {
      var datas = res.data.data
      this.img = datas[0]
    })
    getSlidePics('LUNBOTUCE', 5).then(res => {
      var datas = res.data.data
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
  }
}
</script>

<style scoped>
</style>
