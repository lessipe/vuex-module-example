import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const module1 = {
  state: {
    module1Value: 'Module 1'
  },
  getters: {
    module1ValueWithHello(state, getters, rootState) {
      return 'Hello, ' + state.module1Value;
    }
  },
  mutations: {
    setModule1Value(state, value) {
      state.module1Value = value;
    }
  },
  actions: {
    setModule1Value(context, value) {
      context.commit('setModule1Value', value);
    }
  }
};

const module2 = {
  state: {
    module2Value: 'Module 2'
  },
  getters: {
    module2ValueWithHello(state, getters) {
      return 'Hello, ' + state.module2Value;
    }
  },
  mutations: {
    setModule2Value(state, value) {
      state.module2Value = value;
    }
  },
  actions: {
    setModule2Value(context, value) {
      context.commit('setModule2Value', value);
    }
  }
};

const store = new Vuex.Store({
  modules: {
    module1,
    module2
  }
});

export default store;
