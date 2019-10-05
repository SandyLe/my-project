<template>
    <div id="brand">
      <div>
        <img :src="img" style="width: 100%;"/>
      </div>
      <div class="newsListNav">
        您所在位置：{{paths}}
      </div>
      <div class="newsListContent">
        <ul>
          <li v-for="(item,index) in newsData" :key="index">
            <div>
              <div class="contentUp">
                <img :src="item.mainImgUrl" height="150px"/>
              </div>
              <div class="contentDown">
                <h4>{{item.name}}</h4>
                <span v-html="item.content ? item.content.substring(0, 96) : ''"></span>
                <span><router-link :to="'/news/' + item.newsTypeCode + '/' + item.id">...>>查看详情</router-link></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pageNumber">
        <pageList v-bind:pageData="pageData" v-on:updatePageDate="updatePageDate"/>
      </div>
    </div>
</template>

<script>
import pageList from './PageList'
import {getSlidePics, getPageData, getPath} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'brand',
  data () {
    return {
      pageData: {
        identity: 'news',
        pageSize: 6,
        currentPage: 1,
        totalPages: 1
      },
      paths: '',
      img: baseUrl + '../assets/hf.jpg',
      newsData: [{
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
  components: {
    'pageList': pageList
  },
  methods: {
    changepage () {},
    updatePageDate (pageData) {
      this.pageData = pageData
      getPageData(this.pageData).then(res => {
        this.newsData = res.data.data.data
        delete res.data.data.data
        // this.pageData = res.data.data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.$route.params.code) {
        var newsType = this.$route.params.code
        this.pageData.newsTypeCode = newsType
        getSlidePics(newsType, 1).then(res => {
          var datas = res.data.data
          if (datas.length === 0) {
            datas[0] = '/upload/CPPP/1570070012464-990185544.jpg'
          }
          this.img = baseUrl + datas[0]
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
        getPageData(this.pageData).then(res => {
          this.newsData = res.data.data.data
          delete res.data.data.data
          this.pageData = JSON.parse(JSON.stringify(res.data.data))
        })
      }
    }
  },
  mounted () {
    var newsType = this.$route.params.code
    this.pageData.newsTypeCode = newsType
    getSlidePics(newsType, 1).then(res => {
      var datas = res.data.data
      if (datas.length === 0) {
        datas[0] = '/upload/CPPP/1570070012464-990185544.jpg'
      }
      this.img = baseUrl + datas[0]
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
    getPageData(this.pageData).then(res => {
      this.newsData = res.data.data.data
      delete res.data.data.data
      this.pageData = JSON.parse(JSON.stringify(res.data.data))
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
  height: 370px;
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
.contentDown span {
  font-size: 12px;
  padding: 0;
  margin: 0;
}
.brandContent h4 {
  margin-top: 100px;
}
.pageNumber{
  margin-bottom: 20px;
}
</style>
