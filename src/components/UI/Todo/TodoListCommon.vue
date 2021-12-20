<template>
  <div class="container-md">
    <fieldset>
      <legend>{{ heading }}</legend>
      <ul class="list-group list-group-flush" v-for="todo in getTodos" :key="todo.id">
        <to-do-item :todo="todo"></to-do-item>
      </ul>
    </fieldset>
  </div>
</template>

<script>

import ToDoItem from '@/components/UI/Todo/ToDoItem.vue';

export default {
  name: 'TodoListCommon',
  props: {
    getTodos: {
      type: Array,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
  },
  components: { ToDoItem },
};
</script>

<style scoped>

</style>
