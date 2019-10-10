<template>
    <div id="brand">
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <div class="newsListNav">
        您所在位置：{{paths}}
      </div>
      <div class="newsListContent">
        <h3 style="text-align: center">{{ newsData.name }}</h3>
        <p  style="text-align: center; font-size:10px">{{newsData.updateDate}}</p>
        <div v-html="newsData.content"></div>
      </div>
    </div>
</template>

<script>
import formatTimeToStr from './../api/date'
import {getSlidePics, getOneData, getPath} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'news',
  data () {
    return {
      paths: '',
      img: baseUrl + '../assets/hf.jpg',
      newsData: {}
    }
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      if (this.$route.params.newsTypeCode || this.$route.params.id) {
        var newsType = this.$route.params.newsTypeCode
        var id = this.$route.params.id
        getSlidePics(newsType, 1).then(res => {
          var datas = res.data.data
          if (datas.length === 0) {
            datas[0] = baseUrl + '/upload/CPPP/1570070012464-990185544.jpg'
          }
          this.img = datas[0]
        })
        getPath(newsType).then(res => {
          var temp = ''
          res.data.data.forEach(function (e) {
            temp = temp + e + '>> '
          })
          if (temp.endsWith('>> ')) {
            temp = temp.substr(0, temp.length - 3)
          }
          this.paths = temp
        })
        getOneData('news', id).then(res => {
          this.newsData = res.data.data
          console.log(this.newsData.updateDate)
          this.newsData.updateDate = formatTimeToStr(this.newsData.updateDate)
          console.log(this.newsData.updateDate)
        })
      }
    }
  },
  mounted () {
    var newsType = this.$route.params.newsTypeCode
    var id = this.$route.params.id
    getSlidePics(newsType, 1).then(res => {
      var datas = res.data.data
      if (datas.length === 0) {
        datas[0] = baseUrl + '/upload/CPPP/1570070012464-990185544.jpg'
      }
      this.img = datas[0]
    })
    getPath(newsType).then(res => {
      var temp = ''
      res.data.data.forEach(function (e) {
        temp = temp + e + '>> '
      })
      if (temp.endsWith('>> ')) {
        temp = temp.substr(0, temp.length - 3)
      }
      this.paths = temp
    })
    getOneData('news', id).then(res => {
      this.newsData = res.data.data
      console.log(this.newsData.updateDate)
      this.newsData.updateDate = formatTimeToStr(this.newsData.updateDate)
      console.log(this.newsData.updateDate)
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
  height: 360px;
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
.pageNumber{
  margin-bottom: 20px;
}
</style>
