import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, status) {
      state.loading = status;
    },
  },
  getters: {
    loading: state => state.loading,
  }
});