import Vue from 'vue';
import Vuex from 'vuex';

import artist from '@store/modules/app/artist';
import festival from '@store/modules/app/festival';

Vue.use(Vuex);

export default {
  namespaced: true,
  modules: {
    artist,
    festival
  }
};
