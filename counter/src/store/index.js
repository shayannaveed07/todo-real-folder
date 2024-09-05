import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3000,
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
  actions: {
    increaseCount({ commit, state }, payload) {
      setTimeout(() => {
        let temp = state.count + payload;
        commit("increaseCount", temp);
      }, 1000);
      // commit("increaseCount");
    },
    decreaseCount({ commit }) {
      setTimeout(() => {
        commit("decreaseCount");
      }, 1000);
      // commit("decreaseCount");
    },
  },
  mutations: {
    increaseCount(state, payload) {
      state.count = payload;
    },
    decreaseCount(state) {
      state.count--;
    },
  },

  modules: {},
});
