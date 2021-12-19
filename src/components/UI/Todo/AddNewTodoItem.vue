<template>
  <div class="container-md">
    <div class="input">
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInputGrid"
                   placeholder="Add new todo here...">
            <label for="floatingInputGrid">Todo: </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
              <option value="1"><todo-tag badge-color="red"></todo-tag> Important</option>
              <option value="2"><todo-tag badge-color="yellow"></todo-tag> So so...</option>
              <option value="3"><todo-tag badge-color="green"></todo-tag> Chill</option>
            </select>
            <label for="floatingSelectGrid">Select Urgency</label>
          </div>
        </div>
      </div>
      <div class="add-btn">
        <button type="button" class=" col-mdbtn btn-primary btn-lg">Add Todo</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoTag from '@/components/UI/Todo/TodoTag.vue';

export default {
  name: 'AddNewTodoItem',
  components: { TodoTag },
};
</script>

<style scoped>
@media screen and (min-width: 1400px) {
  .input {
    margin-left: 20%;
    margin-right: 20%;
  }
}

.form-select {
  align-items: center;
}

.container-md {
  margin-top: 2em;
  margin-bottom: 2em;
}

.add-btn {
  margin-top: 1.5em;
}
</style>
