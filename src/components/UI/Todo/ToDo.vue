<template>
  <div class="container-md">
    <fieldset>
      <legend>Pending</legend>
      <ul class="list-group list-group-flush" v-for="todo in getTodos" :key="todo.id">
        <to-do-item :todo="todo"></to-do-item>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoItem from '@/components/UI/Todo/ToDoItem.vue';

export default {
  components: { ToDoItem },
  computed: {
    ...mapGetters(['getTodos']),
  },
};
</script>

<style>

</style>
