<template>
    <div id = "index">
      <app-slider></app-slider>
      <div>
        <img src="../assets/energe.jpg" style="width: 100%;"/>
      </div>
    </div>
</template>

<script>
import Slider from './Slider.vue'
export default {
  name: 'index',
  components: {
    'app-slider': Slider
  }
}
</script>

<style scoped>

</style>
