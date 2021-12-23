export default {
  markDone({ todos }, payload) {
    const updateTodo = todos.find((todo) => payload.todo.id === todo.id);
    updateTodo.done = true;
  },
  markUndone({ todos }, payload) {
    const updateTodo = todos.find((todo) => payload.todo.id === todo.id);
    updateTodo.done = false;
  },
  deleteTodo({ todos }, payload) {
    const updateTodo = todos.find((todo) => payload.todo.id === todo.id);
    const updatedTodoIdx = todos.indexOf(updateTodo);
    todos.splice(updatedTodoIdx, 1);
  },
  addTodo({ todos }, payload) {
    todos.push(payload.newTodo);
  },
};
