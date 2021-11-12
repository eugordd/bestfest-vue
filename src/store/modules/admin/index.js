import Vue from 'vue';
import Vuex from 'vuex';

import artist from '@store/modules/admin/artist';
import festival from '@store/modules/admin/festival';
import genre from '@store/modules/admin/genre';
import auth from '@store/modules/admin/auth';

Vue.use(Vuex);

export default {
  namespaced: true,
  modules: {
    artist,
    festival,
    genre,
    auth
  }
};
