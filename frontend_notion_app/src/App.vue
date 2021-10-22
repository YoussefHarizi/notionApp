<template>
  <div id="app">
    <app-layout>
      <div class="text-red-500">exemple app</div>
      <router-view/>
    </app-layout>
    
    
    
      
  </div>
</template>
<script>
export default {

  
}
</script>

<style>
@import "assets/tailwind.css";
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
  color: #42b983;
}
</style>
