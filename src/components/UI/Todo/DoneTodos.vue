<template>
  <todo-list-common :get-todos="getDoneTodos" heading="Done"></todo-list-common>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListCommon from '@/components/UI/Todo/TodoListCommon.vue';

export default {
  name: 'DoneTodos',
  components: { TodoListCommon },
  computed: {
    ...mapGetters([
      'getDoneTodos',
    ]),
  },
};
</script>

<style scoped>

</style>
