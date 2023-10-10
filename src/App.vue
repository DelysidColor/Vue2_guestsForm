<template>
  <div id="app">
    <nav class="nav">
      <div class="logo">
        <img src="@/assets/header/Alef.jpg" alt="company_logo" />
      </div>
      <div class="nav_links">
        <router-link to="/form">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
      </div>
    </nav>
    <router-view />
    <footer>all rights reserved</footer>
  </div>
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

.logo {
  margin-left: 90px;
  margin-right: 380px;
  position: absolute;
  left: -20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px rgb(216, 213, 213);
  height: 65px;
  padding: 5px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav_links {
  font-weight: 400;
  font-size: 14px;
}

.nav_links a {
  color: rgba (17, 17, 17, 0.48);
  margin-right: 20px;
  text-decoration: none;
}

.nav_links a:hover {
  color: grey;
}

.nav_links a:visited {
  color: #59c79f;
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
