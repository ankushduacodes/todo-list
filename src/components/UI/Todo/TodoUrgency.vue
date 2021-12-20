<template>
  <div class="tag">
    <p class="rounded-circle">
      {{ (badgeColor.toLowerCase() === 'red') ? '🔴' : (badgeColor === 'green' ? '🟢' : '🟡') }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    badgeColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tag {
  display: flex;
  align-items: center;
}
.rounded-circle {
  margin: 0 0 0 10px;
}
</style>
