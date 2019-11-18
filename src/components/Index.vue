<template>
    <div id = "index">
      <app-slider v-bind:sliders="sliders" v-bind:imgHeight="imgHeight" v-bind:imgSize="imgSize"></app-slider>
      <div class="content">
        <ul>
          <li v-for="(item,index) in imgs" :key="index">
            <div v-if="item.url">
              <img :src="item.url" width="100%"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import {getSlidePics, getIndexConfig} from './../api/data'

export default {
  name: 'index',
  data () {
    return {
      imgs: [],
      sliders: [],
      imgSize: 0,
      imgHeight: 0,
      imgRealWidth: 0,
      imgRealHeight: 0,
      imgWidth: document.body.clientWidth
    }
  },
  components: {
    'app-slider': Slider
  },
  mounted () {
    getIndexConfig().then(res => {
      var datas = res.data.data
      this.imgs = datas
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
  .content ul{
    margin: 0;
    padding: 0;
  }
  .content ul li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
