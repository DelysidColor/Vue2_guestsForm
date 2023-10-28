<template>
  <div class="preview">
    <div class="storedPerson_info">
      <p class="info">Personal info/p></p>
      <p>Name: <input v-model="storedPerson.name" /></p>
      <p>Age: <input v-model="storedPerson.age" /></p>
    </div>
    <div class="children_info">
      <p class="info">Clildren</p>
      <div v-for="(child, index) in storedPerson.children" :key="index">
        <div style="display: flex">
          <p style="margin-right: 30px">
            Child name: <input v-model="child.name" />
          </p>
          <p style="margin-right: 30px">
            Child age: <input v-model="child.age" />
          </p>
        </div>
      </div>
    </div>
    <button class="save_btn" @click="$router.push('/preview')">Save</button>
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

input {
  display: block;
  width: 98%;
  height: 35px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.save_btn {
  padding: 10px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: rgba(1, 167, 253, 1);
  font-size: 14px;
  font-weight: 400;
  color: white;
}

.save_btn:hover {
  background-color: rgb(93, 195, 246);
}

.save_btn:active {
  background-color: rgb(1, 123, 185);
}
</style>
