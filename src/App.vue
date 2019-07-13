<template>
  <div id="app">
    <app-header></app-header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /**text-align: center;**/
  color: #2c3e50;
  padding: 0;
  margin-outside: 0;
  overflow: auto;
  height: 100%;
/**  margin-top: 60px;**/
}
</style>
