import Vue from 'vue';
import Vuex from 'vuex';

import modals from '@store/modules/modals';
import admin from '@store/modules/admin';
import app from '@store/modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    modals,
    admin,
    app
  }
});

export default store;
