<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <div><h1> Test </h1> </div> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <login></login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
