<template>
  <div class="container-md">
    <fieldset>
      <legend>Pending</legend>
      <ul class="list-group list-group-flush" v-for="todo in getPendingTodos" :key="todo.id">
        <to-do-item :todo="todo"></to-do-item>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoItem from '@/components/UI/Todo/ToDoItem.vue';

export default {
  name: 'PendingTodos',
  components: { ToDoItem },
  computed: {
    ...mapGetters(['getPendingTodos']),
  },
};
</script>

<style scoped>

</style>
