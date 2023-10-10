<template>
  <div>
    <div class="form_child" v-for="(child, index) in children" :key="index">
      <input v-model="child.name" type="text" placeholder="Имя" required />
      <input v-model="child.age" type="number" placeholder="Возраст" required />
      <button class="delitechild_btn" @click="$emit('remove', index)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.form_child {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

input {
  display: block;
  width: 40%;
  height: 35px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
}

.delitechild_btn {
  color: rgba(1, 167, 253, 1);
  border: none;
  background-color: white;
  width: 65px;
  height: 30px;
  padding: 5px;
}

.delitechild_btn:hover {
  color: rgb(103, 201, 251);
}

.delitechild_btn:active {
  color: rgb(0, 73, 110);
}
</style>
