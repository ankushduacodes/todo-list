<template>
  <template v-if="getPendingTodos.length">
    <todo-list-common :get-todos="getPendingTodos" heading="Pending"></todo-list-common>
  </template>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListCommon from '@/components/UI/Todo/TodoListCommon.vue';

export default {
  name: 'PendingTodos',
  components: { TodoListCommon },
  computed: {
    ...mapGetters(['getPendingTodos']),
  },
};
</script>

<style scoped>

</style>
