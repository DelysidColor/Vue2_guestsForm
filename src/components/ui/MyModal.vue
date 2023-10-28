<template>
  <div class="modal-shadow">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot name="body">
        <div class="modal-footer">
          <button class="modal-footer__button" @click="closeModal">Ок</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    },
  },
};
</script>

<style scoped></style>
