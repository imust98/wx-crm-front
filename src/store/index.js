import Vue from 'vue';
import Vuex from 'vuex';

import test from '@/store/modules/test';
import getters from '@/store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test
  },
  getters
});
