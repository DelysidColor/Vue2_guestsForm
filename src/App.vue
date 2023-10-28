<template>
  <div id="app">
    <Nav-bar />
    <router-view />
    <footer>all rights reserved</footer>
  </div>
</template>

<script>
import NavBar from "/src/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  width: 100%;
  margin-top: auto;
  background-color: rgb(237, 237, 237);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}
</style>
