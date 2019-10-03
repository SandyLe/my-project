<template>
  <div style="height: 150px; position: relative">
    <div class="back_add">
      <div class="threeImg">
        <div class="Containt">
          <!--<div class="iconleft" @click="zuohua">
            <i class="el-icon-arrow-left"></i>
          </div>-->
          <ul :style="{'left':calleft + 'px'}" >
            <li v-for="(item,index) in superurl" :key="index" :mouseover="stopmove()" :mouseout="move()">
              <img :src="item.img"/>
            </li>
          </ul>
          <!--<div class="iconright" @click="youhua">
            <i class="el-icon-arrow-right" ></i>
          </div>-->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getSlidePics} from './../api/data'
import config from '../../config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'BaseSwiper',
  props: {
    speed: Number,
    direction: String
  },
  data () {
    return {
      superurl: [
      ],
      calleft: 0
    }
  },
  created () {
    this.move()
  },
  methods: {
    // 移动
    move () {
      this.timer = setInterval(this.starmove, 100)
    },
    // 开始移动
    starmove () {
      this.calleft -= 1
      if (this.calleft < -1360) {
        this.calleft = 0
      }
    },
    // 鼠标悬停时停止移动
    stopmove () {
      clearInterval(this.timer)
    },
    // 点击按钮左移
    zuohua () {
      this.calleft -= 340
      if (this.calleft < -1200) {
        this.calleft = 0
      }
    },
    // 点击按钮右移
    youhua () {
      this.calleft += 340
      if (this.calleft > 0) {
        this.calleft = -1020
      }
    }
  },
  mounted () {
    getSlidePics('QYFC', 5).then(res => {
      var datas = res.data.data
      var imgs = new Array(datas.length)
      for (var i = 0; i < datas.length; i++) {
        imgs[i] = {'img': baseUrl + datas[i]}
      }
      this.superurl = imgs
      console.log(this.superurl)
    })
  }
}
</script>
<style scoped>
  #divAdd {
    background-color: #ededed;
    /*width: 100%;*/
    /*min-width: 1200px;*/
    width: 100% ;
    margin: 2px auto;
  }

  .divAdd-con {
    margin: 0px auto;
    width: 1000px;
    overflow: auto;
    padding: 30px 0px;
  }

  .divAdd-con img {
    float: left;
  }

  .indexrt {
    margin: 0px 40px;
  }

  .divAddleft img {
    float: left;
    margin-bottom: 7px;
  }

  .divAddleft {
    float: left;
    display: inline;
    width: 370px;
  }

  .divAddrt {
    float: right;
    display: inline;
    margin-top: 7px;
  }

  .back_add {
    background-color: #fff;
  }

  .divAdd-con img {
    border: none;
  }

  a:focus,
  a:hover {
    color: #23527c;
  }

  .threeImg {
    height: 158px;
    background: #fff;
    /**border-bottom: 3px solid #4679B2;**/
    min-width: 1000px;
  }

  .threeImg .Containt ul {
    margin: 0 auto;
    width: 300%;
    position: absolute;
    left: 0px;
    cursor: pointer;
    height: 100%
  }

  .threeImg .Containt ul li {
    width: 300px;
    margin-right: 40px;
    margin-top: 10px;
    list-style-type: none;
    float: left;
  }

  .threeImg .Containt ul li img {
    height: 128px;
    width: 100%;
    float: left;
  }

  .Containt {
    position: relative;
    width: 90%;
    height: 130px;
    overflow: hidden;
    margin: 0 auto;
  }

  .iconleft {
    position: absolute;
    width: 20px;
    height: 80px;
    top: 10px;
    z-index: 99999;
    padding-top: 48px;
    background-color: #ddd;
    vertical-align: middle;
  }

  .iconright {
    position: relative;
    left: 99%;
    top: 70px;
    background-color: #ddd;
    /*position: absolute;*/
    width: 20px;
    height: 80px;
    top: 10px;
    z-index: 99999;
    padding-top: 48px;
    background-color: #ddd;
    vertical-align: middle;
  }
</style>
