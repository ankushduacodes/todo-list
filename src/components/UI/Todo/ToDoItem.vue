<template>
  <li class="list-group-item">
    <div class="container-md">
      <div class="card text-white bg-dark">
        <todo-urgency :badge-color="todo.urgency"></todo-urgency>
        <div class="card-body" :contenteditable="contentEditable"
             @blur="setContentEditableFalse" @dblclick="setContentEditableTrue">
          {{ todo.item }}
        </div>
        <div class="close-btn">
          <button type="button" class="btn btn-success">✔</button>
        </div>
        <div class="close-btn">
          <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import TodoUrgency from '@/components/UI/Todo/TodoUrgency.vue';

export default {
  name: 'ToDoItem',
  components: { TodoUrgency },
  props: {
    todo: {
      type: Object,
      required: true,
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
      this.contentEditable = true;
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

</style>
