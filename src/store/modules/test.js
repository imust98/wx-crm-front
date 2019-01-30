import {
  test
} from '@/api/test';

const demo = {
  state: {},
  mutations: {
    TEST: () => {
      console.log('xxxx');
    }
  },
  actions: {
    getData({
      commit
    }, data) {
      return new Promise(resolve => {
        test(data).then(response => {
          commit('TEST');
          console.log(response.data);
          resolve(response.data);
        });
      });
    }
  }
};

export default demo;
