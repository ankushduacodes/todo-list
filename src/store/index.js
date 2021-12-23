import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
      {
        item: 'This is  cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
      {
        item: 'boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'yellow',
      },
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'green',
      },
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
    ],
  },
  getters: {
    getTodos({ todos }) {
      return todos;
    },
    getDoneTodos({ todos }) {
      return todos.filter((todo) => todo.done);
    },
    getPendingTodos({ todos }) {
      return todos.filter((todo) => !todo.done);
    },
  },
  mutations: {
    markDone({ todos }, payload) {
      const updateTodo = todos.find((todo) => payload.todo.id === todo.id);
      updateTodo.done = true;
    },
    markUndone() {

    },
  },
  actions: {
    markTodoDone({ commit }, payload) {
      commit('markDone', payload);
    },
    markTodoUndone() {

    },
  },
  modules: {},
});
