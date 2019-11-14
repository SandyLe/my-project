<template>
  <div id="indexProducts">
    <ul>
      <li v-for="(item, index) in hotproductList" :key="index"><img :src="item.imgUrl" @click="openOutSite(item)"/></li>
    </ul>
  </div>
</template>

<script>
// import config from '../../config'
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

export default {
  name: 'IndexProducts',
  data () {
    return {
    }
  },
  props: {
    hotproductList: []
  },
  methods: {
    openOutSite (item) {
      if (item.shopUrl) {
        var tempwindow = window.open('_blank') // 先打开页面
        tempwindow.location = item.shopUrl // 后更改页面地址
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
#indexProducts{
  border: #2c3e50;
  width: 90%;
  position: relative;
  height: 900px;
  margin: 0 auto;
}
#indexProducts ul{
  width: inherit;
  background: #42b983;
}
#indexProducts ul li {
  width: 30%;
  margin-left: 3.3%;
  position: relative;
  list-style-type: none;
  float: left;
  padding-top: 20px;
}
#indexProducts ul li>img{
  width: 100%;
  height: 100%;
  border:1px solid darkgray;
  box-shadow: 2px 4px 5px darkgray;
  border-radius: 5px;
}
#indexProducts ul li>img:hover{
  border: burlywood 1px solid;
  box-shadow: 4px 6px 10px burlywood;
}
</style>
