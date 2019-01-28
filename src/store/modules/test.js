import { test } from '@/api/test';

const demo = {
  state: {},
  mutations: {},
  actions: {
    getData({ commit, data }) {
      return new Promise(resolve => {
        test(data).then(response => {
          commit('ss');
          console.log(response.data);
          resolve(response.data);
        });
      });
    }
  }
};

export default demo;
