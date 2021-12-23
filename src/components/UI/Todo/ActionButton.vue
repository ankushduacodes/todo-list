<template>
  <div class="close-btn">
    <button type="button" class="btn btn-success" @click="clicked">{{ buttonContent }}</button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
  props: {
    buttonContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
