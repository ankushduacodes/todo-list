<template>
  <div class="container-md">
    <fieldset>
      <legend>{{ heading }}</legend>
      <ol>
        <li class="todo-list" v-for="todo in getTodos" :key="todo.id">
          <to-do-item :classes="classes" :todo="todo"></to-do-item>
        </li>
      </ol>
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
    classes: {
      type: String,
    },
  },
  components: { ToDoItem },
};
</script>

<style scoped>

li {
  list-style: none;
  padding-bottom: 10px;
}

ol {
  margin: 0;
  padding: 0;
}

</style>
