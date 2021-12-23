<template>
  <template v-if="getDone.length">
    <todo-list-common :get-todos="getDone" heading="Done"></todo-list-common>
  </template>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListCommon from '@/components/UI/Todo/TodoListCommon.vue';

export default {
  name: 'DoneTodos',
  components: { TodoListCommon },
  computed: {
    ...mapGetters({
      getDone: 'todos/getDoneTodos',
    }),
  },
};
</script>

<style scoped>

</style>
