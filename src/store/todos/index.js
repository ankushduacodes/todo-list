import mutations from '@/store/todos/mutations';
import getters from '@/store/todos/getters';
import actions from '@/store/todos/actions';

export default {
  namespaced: true,
  state() {
    return {
      todos: [],
    };
  },
  getters,
  mutations,
  actions,
};
