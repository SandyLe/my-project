<template>
  <div tag="div" class="articleList articleListMod-3 er-carouseindex" name="slide-fade" id="articleList" :style="{height:imgHeight+'px'}" >
    <span id="btn1" class="er-carouseindex-left" @mousedown="imgMove('mouseLeft')" @mouseup="cancelMove('left')" v-show="isOrNotButton"></span>
    <span id="btn2" class="er-carouseindex-right"  @mousedown="imgMove('mouseRight')" @mouseup="cancelMove('right')" v-show="isOrNotButton"></span>
    <div id="packageAll" class="er-carouseindex-con" @mouseover="clearAuto" @mouseout="slideAuto">
      <div class="er-carouseindex-bar" v-show="isOrNotCircle">
        <div v-for="(item,dex) in imgList" @mouseup="clearAuto" class="er-carouseindex-circle" :key="dex" @click="circleClick(dex)" :class="{circleSelected:dex===indexCircle}">
        </div>
      </div>
      <div id="imageAll" class="er-carouseindex-item" :style="{transform:translateX,transition:transFlag?transitionTime:''}">
        <div class="articleList-box er-carouseindex-box" v-for="(list,index) in imgLisShow" :style="{width:imgWidth+'%'}" :key="index"
             style="max-height:50%;">
          <slot :item="list"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScrollView',
  data () {
    return {
      imgList: [],
      imgLisShow: [],
      timer: null,
      timeout: null,
      index: 0,
      translateXnum: 0,
      translateX: '',
      imgWidth: '',
      timeDown: '',
      timeup: '',
      clickSpace: '',
      transFlag: true,
      transitionTime: '',
      indexCircle: 0
    }
  },
  props: {
    duration: 0,
    typeNumber: 0,
    timeSpace: 0,
    url: '',
    pageNumber: 0,
    isOrNotButton: true,
    isOrNotCircle: true,
    imgHeight: ''
  },
  watch: {
    index: {
      handler () {
        var _this = this
        if (Math.abs(this.index) === this.imgList.length) {
          this.indexCircle = 0
          setTimeout(function () {
            _this.reset()
          }, _this.duration * 1000 * 0.98)
        } else {
          this.indexCircle = this.index
        }
        this.calcXnum()
      }
    },
    translateXnum: {
      handler () {
        this.translateX = 'translateX(' + this.translateXnum + '%)'
      }
    }
  },
  methods: {
    // 页面初始化复赋值
    imgView: function () {
      var _this = this
      _this.$http.get(_this.url).then(function (res) {
        _this.imgList = res.data.imgList
        for (var i = 0; i < 3; i++) {
          _this.imgList.forEach(function (item, index) {
            _this.imgLisShow.push(item)
          })
        }
        _this.reset()
        _this.slideAuto()
        _this.imgWidth = (100 / _this.pageNumber) - 1
        _this.transitionTime = 'all ' + _this.duration * 0.98 + 's linear'
        console.log(_this.transitionTime)
      })
    },
    // 图片滚动方法(长按)
    imgMove: function (direct) {
      var _this = this
      _this.timeDown = new Date()// 记录按下的时间
      _this.timeout = setInterval(function () {
        if (direct === 'mouseLeft') {
          _this.leftMove()
        } else {
          _this.rightMove()
        }
      }, 300)
    },
    cancelMove: function (direct) {
      var _this = this
      _this.clearAuto()
      this.timeup = new Date()// 记录松开的时间
      this.clickSpace = this.timeup.getTime() - this.timeDown.getTime()
      // 时间间隔小于500毫秒为点击，反之为长按
      if (this.clickSpace < 500) {
        for (var i = 0; i < _this.typeNumber; i++) {
          if (direct === 'left') {
            _this.leftMove()
          } else {
            _this.rightMove()
          }
        }
      }
      if (this.timeout) {
        clearInterval(this.timeout)
        this.timeout = null
      }
    },
    // 向左移动
    leftMove: function () {
      this.index--
      this.transFlag = true
    },
    // 向右移动
    rightMove: function () {
      this.transFlag = true
      this.index++
    },
    slideAuto: function () {
      var _this = this
      _this.timer = setTimeout(function () {
        if (Math.abs(_this.index) !== _this.imgList.length) {
          _this.rightMove()
          _this.slideAuto()
        }
      }, _this.timeSpace * 1000)
    },
    clearAuto: function () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    // 重置
    reset: function () {
      this.index = 0
      this.transFlag = false
      this.calcXnum()
    },
    calcXnum: function () {
      // var _this = this
      this.translateXnum = -(this.index + this.imgList.length) * (100 / this.pageNumber)
    },
    // 点击圆圈跳转图片
    circleClick: function (dex) {
      this.index = dex
      this.clearAuto()
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.imgView()
    })
  }
}
</script>
