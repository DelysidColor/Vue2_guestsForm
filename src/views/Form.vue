<template>
  <div class="form">
    <form @submit.prevent="saveInfo">
      <div class="personal">
        <p>Персональные данные</p>
        <input type="text" v-model="person.name" placeholder="Имя" required />
        <input
          type="number"
          v-model="person.age"
          placeholder="Возраст"
          required />
      </div>
      <div class="kids">
        <div class="title_btn">
          <p>Дети (макс. 5)</p>
          <button
            type="button"
            class="add_kid_btn"
            v-show="person.children.length < 5"
            @click="addChild">
            <img src="@/assets/plus/plusPlus.png" class="plus" /> Добавить
            ребенка
          </button>
        </div>
        <ChildrenList
          :children="person.children"
          @remove="removeChild($event)" />
        <button type="submit" class="save_btn">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import ChildrenList from "@/components/ChildrenList";
export default {
  components: {
    ChildrenList,
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
  },
  methods: {
    addChild() {
      const child = {
        name: "",
        age: "",
      };
      this.person.children.push(child);
			this.$store.isSaved = false;
    },
    removeChild(index) {
      if (index < this.person.children.length) {
        this.person.children.splice(index, 1);
        this.$store.isSaved = false;
      }
    },
    saveInfo() {
      this.$store.commit("savePerson", this.person);
      this.$store.isSaved = true;
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.personal {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
}

.personal input {
  display: block;
  width: 98%;
  height: 35px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.kids {
  width: 615px;
  font-size: 16px;
}

.title_btn {
  display: flex;
  justify-content: space-between;
}

.add_kid_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid rgba(1, 167, 253, 1);
  color: rgba(1, 167, 253, 1);
  border-radius: 20px;
}

.add_kid_btn:hover {
  box-shadow: 0px 0px 5px teal;
}

.add_kid_btn:active {
  background-color: rgb(240, 240, 240);
}

.add_kid img {
  margin-right: 10px;
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

.children_list {
  list-style-type: none;
}
</style>
