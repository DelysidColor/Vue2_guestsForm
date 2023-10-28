<template>
  <nav class="nav">
    <div class="logo">
      <img src="@/assets/header/Alef.jpg" alt="company_logo" />
    </div>
    <div class="nav_links">
      <router-link to="/">Form</router-link>
      <router-link to="/preview">Preview</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
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

.nav_links {
  font-weight: 400;
  font-size: 14px;
}

.nav_links a {
  color: rgb(182, 180, 180);
  margin-right: 20px;
  text-decoration: none;
}

.nav_links a:hover {
  color: grey;
}

.active {
  color: #59c79f;
}
</style>
