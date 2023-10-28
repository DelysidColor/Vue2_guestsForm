<template>
  <div v-if="$store.isSaved" class="preview">
    <div class="storedPerson_info">
      <router-link :to="{ name: 'formEditor' }">Edit</router-link>
      <p class="info">Personal info</p>
      <p class="info_name">{{ storedPerson.name }}, {{ storedPerson.age }}</p>
    </div>
    <div class="children_info">
      <p class="info">Children</p>
      <div v-for="(child, index) in storedPerson.children" :key="index">
        <p class="info_name">
          <span class="kid">{{ child.name }}, {{ child.age }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    storedPerson() {
      return this.$store.state.storedPerson;
    },
  },
};
</script>
<style scoped>
.preview {
  width: 300px;
  position: relative;
  top: 60px;
  left: 280px;
}

.storedPerson_info {
  margin-bottom: 50px;
}

.storedPerson_info a {
  color: rgb(182, 180, 180);
  text-decoration: none;
}
.storedPerson_info a:hover {
  color: grey;
}

.storedPerson_info a:active {
  color: #59c79f;
}

.info {
  font-weight: 500;
  margin-bottom: 25px;
}

.info_name {
  font-weight: 700;
  margin-bottom: 40px;
}

.kid {
  background-color: rgba(241, 241, 241, 1);
  border-radius: 4px;
  padding: 15px;
}
</style>
