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
              <li v-for="(item,index) in productTypeList" :key="index">
                <div style="font-weight: bold"><a href="#">{{item.productType.name}}</a></div>
                <div>
                  <ul>
                    <li v-for="(item1,index1) in item.brandList" :key="index1">
                    <a style="font-size:14px" :href="'#/brand/' + item1.id">{{item1.name}}</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightContent">
          Right
        </div>
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

import {getSlidePics, getProductTypeList} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'brandList',
  data () {
    return {
      img: baseUrl + '../assets/hf.jpg',
      productTypeList: []
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
  }
}
</script>

<style scoped>
.brandContent{
  width: 90%;
  margin: 0 auto;
}
.leftMenu{
  width: 30%;
  float: left;
}
.rightContent{
  width: 70%;
  float: left;
}
.leftMenuContent{
  width: 99%;
  border: #ededed 1px solid;
}
.brandContent li {
  list-style-type:none;
  overflow: auto;
}
</style>
