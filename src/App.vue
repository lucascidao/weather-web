<template>
  <div id="app">
    <AppLayout>
      <HomePage msg="Welcome to Your Vue.js App" />
    </AppLayout>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import AppLayout from "./components/Layout/AppLayout.vue";

export default {
  name: "App",
  components: {
    HomePage,
    AppLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
