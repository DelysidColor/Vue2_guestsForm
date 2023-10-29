<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
