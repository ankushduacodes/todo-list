<template>
  <add-new-todo-item></add-new-todo-item>
  <to-do></to-do>
</template>

<script>
import AddNewTodoItem from '@/components/UI/Todo/AddNewTodoItem.vue';
import ToDo from '@/components/UI/Todo/ToDo.vue';

export default {
  name: 'Home',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    ToDo,
    AddNewTodoItem,
  },
};
</script>

<style scoped>
.container-sm {
  background-color: #000;
}
</style>
