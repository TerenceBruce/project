<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>  -->
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>  |
    <router-link to="/help">Help</router-link> 
     <router-link to="/news">News</router-link> 
    <!-- <Header></Header> -->
  </div>
  <router-view/>
</template>

<script>
// import Header from "./components/Header"
export default {
  // components: { Header }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #7DB9E2;
}
</style>
