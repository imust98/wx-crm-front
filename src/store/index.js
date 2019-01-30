import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import test from './modules/test';
import permission from './modules/permission';
import getters from '@/store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    permission,
    test
  },
  getters
});
