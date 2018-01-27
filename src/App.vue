<template>
  <div id="app">
    <!--<img src="./assets/logo.png">!-->
    <router-view/>
  </div>
</template>

<script>
import MyButton from './components/MyButton'
export default {
  name: 'app',
  components: {
    MyButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
my-button{
  width:200px;
}
</style>
