export default {
  getTodos({ todos }) {
    return todos;
  },
  getDoneTodos({ todos }) {
    return todos.filter((todo) => todo.done);
  },
  getPendingTodos({ todos }) {
    return todos.filter((todo) => !todo.done);
  },
};
