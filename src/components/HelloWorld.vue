<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <iframe style="display: block; height: 600px; width: 700px;" src="../../static/address.html" width="300" height="150" frameborder="0"></iframe>

    <transition name="mybox">
      <div class="box" v-show="boxshow"></div>
    </transition>
    <button @click="togglebox">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      boxshow: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    togglebox: function () {
      this.boxshow = !this.boxshow
    }
  },
  mounted () {
    this.boxshow = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box{
  height:500px;
  background-color:black;
  overflow: hidden;        }

.mybox-leave-active,.mybox-enter-active{
    transition: all 700ms ease;
  }
.mybox-leave-active,.mybox-enter{
  height:0px !important;
}
.mybox-leave,.mybox-enter-active{
  height: 500px;
}
</style>
