<template>
  <div class="container-md">
    <div class="card text-white bg-dark">
      <todo-tag badge-color="red"></todo-tag>
      <div class="card-body" :contenteditable="contentEditable"
           @blur="setContentEditableFalse" @dblclick="setContentEditableTrue">
        This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks
        mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh
      </div>

      <div class="close-btn">
        <button type="button" class="btn btn-primary">✔</button>
      </div>
      <div class="close-btn">
        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoTag from '@/components/UI/Todo/TodoTag.vue';

export default {
  name: 'ToDoItem',
  components: { TodoTag },

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
