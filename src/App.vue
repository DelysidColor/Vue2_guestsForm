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

h3 {
  color: #59c79f;
}

.modal_btn {
  padding: 10px;
  margin-top: 20px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: rgba(1, 167, 253, 1);
  font-size: 14px;
  font-weight: 400;
  color: white;
}

.modal_btn:hover {
  background-color: rgb(93, 195, 246);
}

.modal_btn:active {
  background-color: rgb(1, 123, 185);
}
</style>
