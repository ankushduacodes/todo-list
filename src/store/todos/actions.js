export default {
  markTodoDone({ commit }, payload) {
    commit('markDone', payload);
  },
  markTodoUndone({ commit }, payload) {
    commit('markUndone', payload);
  },
  deleteTodo({ commit }, payload) {
    commit('deleteTodo', payload);
  },
  addNewTodo({ commit }, payload) {
    commit('addTodo', payload);
  },
};
