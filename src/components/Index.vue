<template>
    <div id = "index">
      <app-slider></app-slider>
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
      img: baseUrl + '../assets/hf.jpg'
    }
  },
  components: {
    'app-slider': Slider,
    'app-products': IndexProducts,
    'app-scrollview': ScrollView
  },
  mounted () {
    getSlidePics('LUNBOTUCE', 1).then(res => {
      var datas = res.data.data
      this.img = datas[0]
    })
  }
}
</script>

<style scoped>
</style>
