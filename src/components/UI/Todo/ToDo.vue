<template>
  <pending-todos></pending-todos>
  <done-todos></done-todos>
</template>

<script>
import PendingTodos from '@/components/UI/Todo/PendingTodos.vue';
import DoneTodos from '@/components/UI/Todo/DoneTodos.vue';

export default {
  components: { DoneTodos, PendingTodos },
};
</script>

<style>

</style>
