import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    color: "",
  },
  getters: {
    square(state) {
      return state.count * state.count;
    },
  },
  mutations: {
    increaseCount(state) {
      console.log(state.randomNumber);
      // state.count += randomNum;
      console.log(state.count);
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      state.count += randomNumber;
    },
    decreaseCount(state) {
      // state.count -= randomNumber;
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      state.count -= randomNumber;
    },
    setColor(state, newval) {
      state.color = newval;
    },
  },
  actions: {
    // increaseCount({ commit }) {
    //   axios(
    //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    //   ).then((respone) => {
    //     commit("increaseCount", parseInt(respone.data));
    //   });
    // },
    // decreaseCount({ commit }) {
    //   axios(
    //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    //   ).then((respone) => {
    //     commit("decreaseCount", parseInt(respone.data));
    //   });
    // },
  },
  modules: {},
});
