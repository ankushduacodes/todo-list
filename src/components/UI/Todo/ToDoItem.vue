<template>
  <div class="container-md">
    <div class="card text-white bg-dark">
      <todo-urgency :badge-color="todo.urgency"></todo-urgency>
      <div :class="'card-body ' + classes" ref="todoText" :contenteditable="contentEditable"
           @blur="setContentEditableFalse" @dblclick="setContentEditableTrue">
        {{ todo.item }}
      </div>
      <action-button @clicked="performClickAction(todo)"
                     :button-content="todo.done? '↩' : '✔'"></action-button>
      <div class="close-btn">
        <button type="button" @click="deleteTodo(todo)" aria-describedby="Delete Todo"
                class="btn-close btn-close-white"
                aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoUrgency from '@/components/UI/Todo/TodoUrgency.vue';
import ActionButton from '@/components/UI/Todo/ActionButton.vue';

export default {
  name: 'ToDoItem',
  components: {
    ActionButton,
    TodoUrgency,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    classes: {
      type: String,
    },
  },
  data() {
    return {
      contentEditable: false,
    };
  },
  methods: {
    setContentEditableFalse() {
      this.contentEditable = false;
    },
    setContentEditableTrue() {
      if (this.todo.done) {
        return;
      }
      this.contentEditable = true;
    },
    markTodoDone(todo) {
      this.$store.dispatch('todos/markTodoDone', { todo });
    },
    markTodoUndone(todo) {
      this.$store.dispatch('todos/markTodoUndone', { todo });
    },
    performClickAction(todo) {
      if (todo.done) {
        this.markTodoUndone(todo);
      } else {
        this.markTodoDone(todo);
      }
    },
    deleteTodo(todo) {
      this.$store.dispatch('todos/deleteTodo', { todo });
    },
  },
};
</script>

<style scoped>
.card {
  align-items: center;
  flex-direction: row;
}

.card-body {
  text-align: start;
}

.close-btn {
  margin-right: 10px;
}

@media screen and (min-width: 992px) {
  .card {
    margin-left: 20%;
    margin-right: 20%;
  }
}

.container-md {
  padding: 0;
}

.line-strike {
  text-decoration: line-through;
}
</style>
