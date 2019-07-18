<template>
    <div id = "index">
      <app-slider></app-slider>
      <div>
        <img src="../assets/energe.jpg" style="width: 100%;"/>
      </div>
      <app-products></app-products>
      <app-scrollview></app-scrollview>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import IndexProducts from './IndexProducts'
import ScrollView from './ScrollView'
export default {
  name: 'index',
  components: {
    'app-slider': Slider,
    'app-products': IndexProducts,
    'app-scrollview': ScrollView
  }
}
</script>

<style scoped>
</style>
