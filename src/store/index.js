import Vue from 'vue';
import Vuex from 'vuex';

import modals from '@store/modules/modals';
import admin from '@store/modules/admin';
import adminAuth from '@store/modules/adminAuth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    modals,
    admin,
    adminAuth
  }
});

export default store;
