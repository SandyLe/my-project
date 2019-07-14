<template>
    <div id = "index">
      <app-slider></app-slider>
    </div>
</template>

<script>
    import Slider from './Slider.vue';
    export default {
      name: "index",
      components: {
        'app-slider': Slider
      }
    }
</script>

<style scoped>

</style>
