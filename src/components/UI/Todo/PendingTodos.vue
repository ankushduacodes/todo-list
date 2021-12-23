<template>
  <template v-if="getPending.length">
    <todo-list-common :get-todos="getPending" heading="Pending"></todo-list-common>
  </template>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListCommon from '@/components/UI/Todo/TodoListCommon.vue';

export default {
  name: 'PendingTodos',
  components: { TodoListCommon },
  computed: {
    ...mapGetters({ getPending: 'todos/getPendingTodos' }),
  },
};
</script>

<style scoped>

</style>
