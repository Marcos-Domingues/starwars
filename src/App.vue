<template>
<section>
  <div id="app" :class="{blur : $store.getters.loading}">
  <router-view class="fade-in"></router-view>
  </div>
  <Spinner v-if="$store.getters.loading"></Spinner>
</section>
</template>

<script>
import Spinner from "./components/Spinner.vue"
export default {
  components: {
    Spinner
  },
}
</script>
<style>
.blur{
  filter: blur(4px);
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  background-color: transparent;
}
html{
  background-color: #333138;
  background-image: url("./assets/galaxy.jpg");
  background-repeat: repeat;
  background-size: 100%;
}
body{
  background-color: transparent;
}
</style>
