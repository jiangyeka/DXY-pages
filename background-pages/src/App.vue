<template>
  <div id="app">
    <div class="nav-wrapper">
      <ul>
        <li><router-link to="searchlist">SearchList</router-link></li>
        <li><router-link to="showimages">ShowImages</router-link></li>
        <li><router-link to="usemodal">UseModal</router-link></li>
        <li><router-link to="useinput">UseInput</router-link></li>
        <li><router-link to="dynamicform">DynamicForm</router-link></li>
      </ul>
    </div>
    <div class="project-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-wrapper {
    position: fixed;
    top: 2%;
    right: 2%;
  }
  .project-wrapper {
    width: 70%;
  }
}
</style>
