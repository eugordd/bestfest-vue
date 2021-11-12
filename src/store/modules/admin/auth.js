import Cookies from 'js-cookie';

import router from '@router';
import AdminAPI from '@api/admin/AdminAPI';

const state = {
  token: Cookies.get('admin-token')
};

const getters = {
  tokenGetter(state) {
    return state.token;
  }
};

const mutations = {
  m_setToken(state, token) {
    state.token = token;
    Cookies.set('admin-token', token);
  },
  m_deleteToken(state) {
    state.token = '';
    Cookies.remove('admin-token');
  }
};

const actions = {
  async a_login({ state, commit }, { email, password }) {
    try {
      const payload = { email, password };
      const { data } = await AdminAPI.login({ payload });
      commit('m_setToken', data.token);
      await router.push({ name: 'admin' });
    } catch (e) {
      throw e;
    }
  },
  async a_logout({ state, commit }) {
    commit('m_deleteToken');
    if (router.currentRoute.name !== 'admin-login') {
      await router.push({ name: 'admin-login' });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
