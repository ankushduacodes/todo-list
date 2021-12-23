import mutations from '@/store/todos/mutations';
import getters from '@/store/todos/getters';
import actions from '@/store/todos/actions';

export default {
  namespaced: true,
  state() {
    return {
      todos: [
        {
          item: 'This is some text within a card boxkamscnjbdhvbnbh cjnkmbvhjnks mnvjb hvjnkmxcnjvb hjnkmdlscnvjbh',
          id: Math.floor(Math.random() * 100000) + 1000000,
          done: true,
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
    };
  },
  getters,
  mutations,
  actions,
};
