<template>
  <div id="header">
    <img  id="header" src = "@/assets/img_logo_dtt@3x.png" >
    <span id="span">
      <nav id="header">
        <router-link id="header" to="/">Houses</router-link>
        <router-link id="header" to="/about">About</router-link>
      </nav>
    </span>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        
      };
    },
  };
</script>

<style>

body {
  background: rgb(232, 232, 232);
  padding: 20px;
  font-family:'Open Sans';
}

#app {
  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  border-radius: 4px;
  padding: 20px;
}

#header{
  background-color:#ffffff;
  vertical-align: center;
  margin-right: 50px;
  display: flex;
}

#span{
  display: flex;
  justify-content: center;
  align-items: center;
  top:50%;
  vertical-align:middle;
  text-align: center;
  align-items: center;
}

</style>
