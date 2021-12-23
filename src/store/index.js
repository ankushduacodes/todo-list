import { createStore } from 'vuex';
import todos from '@/store/todos';

export default createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { todos },
});
