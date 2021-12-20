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
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
        id: Math.floor(Math.random() * 100000) + 1000000,
        done: false,
        urgency: 'red',
      },
      {
        item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
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
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
