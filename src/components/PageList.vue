<template>
  <div id="pageList">
    <div>
      <div class="page"  v-show="show">
        <div class="pagelist">
          <span class="jump" v-show="pageData.currentPage>1" @click="goNext(-1)">上一页</span>
          <span v-show="pageData.currentPage>5" class="jump" @click="jumpPage(1)">1</span>
          <span class="ellipsis"  v-show="efont">...</span>
          <span class="jump" v-for="num in indexs" :key="num" :class="{bgprimary:pageData.currentPage==num}" @click="jumpPage(num)">{{num}}</span>
          <span class="ellipsis"  v-show="efont&&pageData.currentPage<pageData.totalPages-4">...</span>
          <span class="jump" @click="goNext(1)">下一页</span>
          <span v-show="pageData.currentPage<pageData.totalRecords-1" class="jump" @click="jumpPage(pageData.totalRecords)">{{pageData.totalRecords}}</span>
          <span class="jumppoint">跳转到：</span>
          <span class="jumpinp"><input type="text" v-model="changePage"></span>
          <span class="jump gobtn" @click="jumpPage(changePage)">GO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageList',
  props: {
    pageData: {}
  },
  data () {
    return {
      current_page: 1, // 当前页
      pages: 50, // 总页数
      changePage: '', // 跳转页
      nowIndex: 0
    }
  },
  computed: {
    show: function () {
      return this.pageData.totalPages && this.pageData.totalPages !== 1
    },
    efont: function () {
      if (this.pageData.totalPages <= 7) return false
      return this.pageData.currentPage > 5
    },
    indexs: function () {
      var left = 1
      var right = this.pageData.totalPages
      var ar = []
      if (this.pageData.totalPages >= 7) {
        if (this.pageData.currentPage > 5 && this.pageData.currentPage < this.pageData.totalPages - 4) {
          left = Number(this.pageData.currentPage) - 3
          right = Number(this.pageData.currentPage) + 3
        } else {
          if (this.pageData.currentPage <= 5) {
            left = 1
            right = 7
          } else {
            right = this.pageData.totalPages

            left = this.pageData.totalPages - 6
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    jumpPage: function (id) {
      this.pageData.currentPage = id
      console.log('333```' + this.pageData.currentPage)
      this.$emit('updatePageDate', this.pageData)
    },
    goNext: function (temp) {
      this.pageData.currentPage = this.pageData.currentPage + temp
      this.$emit('updatePageDate', this.pageData)
    }
  }
}
</script>

<style scoped>
  .page {
    font-weight: 900;
    height: 40px;
    text-align: center;
    color: #888;
    margin: 20px auto 0;
    background: #f2f2f2;
  }

  .pagelist {
    font-size: 0;
    background: #fff;
    height: 50px;
    line-height: 50px;
  }

  .pagelist span {
    font-size: 14px;
  }

  .pagelist .jump {
    /*border: 1px solid #ccc;*/
    padding: 5px 8px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
  }

  .pagelist .bgprimary {
    cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7;
  }

  .jumpinp input {
    width: 55px;
    height: 26px;
    font-size: 13px;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
  }

  .ellipsis {
    padding: 0px 8px;
  }

  .jumppoint {
    margin-left: 30px;
  }

  .pagelist .gobtn {}

  .bgprimary {
    cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7;
  }
</style>
