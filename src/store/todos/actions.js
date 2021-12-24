import connection from '@/localApi';

// TODO: Add error handling to the db requests

export default {
  async fetchPrevTodos({ commit }) {
    const query = {
      from: 'todos',
    };
    const todos = await connection.select(query);
    commit('setPrevTodos', { todos });
  },
  async markTodoDone({ commit }, payload) {
    const query = {
      in: 'todos',
      set: {
        done: true,
      },
      where: {
        id: payload.todo.id,
      },
    };
    const rowsAffected = await connection.update(query);
    console.log(rowsAffected);
    commit('markDone', payload);
  },
  async markTodoUndone({ commit }, payload) {
    const query = {
      in: 'todos',
      set: {
        done: false,
      },
      where: {
        id: payload.todo.id,
      },
    };
    const rowsAffected = await connection.update(query);
    console.log(rowsAffected);
    commit('markUndone', payload);
  },
  async deleteTodo({ commit }, payload) {
    const query = {
      from: 'todos',
      where: {
        id: payload.todo.id,
      },
    };
    const rowsAffected = await connection.remove(query);
    console.log(rowsAffected);
    commit('deleteTodo', payload);
  },
  async addNewTodo({ commit }, payload) {
    const query = {
      into: 'todos',
      values: [payload.newTodo],
    };
    const rowsAffected = await connection.insert(query);
    console.log(rowsAffected);
    commit('addTodo', payload);
  },
};
