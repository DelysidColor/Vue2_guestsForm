<template>
  <div v-if="$store.isSaved" class="preview">
    <div class="storedPerson_info">
      <p class="info">Персональные данные</p>
      <p class="info_name">{{ storedPerson.name }}, {{ storedPerson.age }}</p>
    </div>
    <div class="children_info">
      <p class="info">Дети</p>
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
