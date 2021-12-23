<template>
  <div class="container-md">
    <div class="input">
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInputGrid"
                   @input="validateTodoInput"
                   placeholder="Add new todo here..." v-model="todoText" ref="todoTextInput">
            <label for="floatingInputGrid">Todo: </label>
            <div class="invalid-feedback todo-err">
              Please enter valid todo...
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid"
                    v-model="selectedUrgency" ref="urgencySelector" @change="validateSelectInput">
              <option value="1" disabled>
                Please select urgency...
              </option>
              <option value="red">
                <todo-urgency badge-color="red"></todo-urgency>
                Important
              </option>
              <option value="yellow">
                <todo-urgency badge-color="yellow"></todo-urgency>
                So so...
              </option>
              <option value="green">
                <todo-urgency badge-color="green"></todo-urgency>
                Chill
              </option>
            </select>
            <label for="floatingSelectGrid">Select Urgency</label>
            <div class="invalid-feedback select-err">
              Please select valid urgency...
            </div>
          </div>
        </div>
      </div>
      <div class="add-btn">
        <button @click="handleAddTodo" type="button" class=" col-md btn btn-primary btn-lg">
          Add Todo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoUrgency from '@/components/UI/Todo/TodoUrgency.vue';

export default {
  name: 'AddNewTodoItem',
  components: { TodoUrgency },
  data() {
    return {
      todoText: '',
      selectedUrgency: 1,
    };
  },
  methods: {
    validateTodoInput() {
      if (this.todoText === '') {
        this.$refs.todoTextInput.classList.remove('is-valid');
        this.$refs.todoTextInput.classList.add('is-invalid');
        return false;
      }
      this.$refs.todoTextInput.classList.remove('is-invalid');
      this.$refs.todoTextInput.classList.add('is-valid');
      return true;
    },

    validateSelectInput() {
      if (this.selectedUrgency === 1) {
        this.$refs.urgencySelector.classList.remove('is-valid');
        this.$refs.urgencySelector.classList.add('is-invalid');
        return false;
      }
      this.$refs.urgencySelector.classList.remove('is-invalid');
      this.$refs.urgencySelector.classList.add('is-valid');
      return true;
    },

    resetInput() {
      this.todoText = '';
      this.selectedUrgency = 1;
      this.$refs.todoTextInput.classList.remove('is-invalid');
      this.$refs.todoTextInput.classList.remove('is-valid');
      this.$refs.urgencySelector.classList.remove('is-invalid');
      this.$refs.urgencySelector.classList.remove('is-valid');
    },
    handleAddTodo() {
      if (!this.validateTodoInput() || !this.validateSelectInput()) {
        return;
      }
      const newTodo = {
        item: this.todoText,
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: this.selectedUrgency,
      };
      this.$store.dispatch('addNewTodo', { newTodo });
      this.resetInput();
    },
  },
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

.todo-err {
  margin-left: 0;
  width: 156px;
}

.select-err {
  margin-left: 0;
  width: 180px;
}

</style>
