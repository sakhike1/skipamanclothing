<template>
  <div id="app">
    <BannerView />
    <TheHeader />
    <SearchBar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>

import TheHeader from "./components/common/TheHeader";
import BannerView from "./components/common/BannerView.vue";
import TheFooter from "./components/common/TheFooter.vue"
import SearchBar from './components/common/SearchBar.vue';



export default {
  name: "App",
  components: {
    BannerView,
    TheHeader,
    SearchBar,
    TheFooter

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
