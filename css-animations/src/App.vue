<template>
  <div id="app">
    <div id="nav">
      <router-link to="/demo01" class="link">demo1</router-link>
      <router-link to="/demo02" class="link">demo2</router-link>
      <router-link to="/demo03" class="link">demo3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'styles/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
#nav {
  padding: 1em;
  a {
    font-weight: bold;
     color: $black;
    &.router-link-exact-active {
      color: $green;
    }
  }
}
.link{
  margin-right: 1em;
}
</style>
