import FestivalAPI from '@api/admin/FestivalAPI';

const state = {
  festivals: []
};

const getters = {

};

const mutations = {
  m_setFestivals(state, festivals) {
    state.festivals = festivals;
  }
};

const actions = {
  async a_getFestival({ commit }, { id }) {
    const { data } = await FestivalAPI.get({ id });
    return data;
  },
  async a_getFestivalsList({ commit }) {
    const { data } = await FestivalAPI.getList();
    commit('m_setFestivals', data.festivals);
  },
  async a_createFestival({ dispatch }, { name, description, genres, artists }) {
    const payload = {
      name,
      description,
      genres,
      artists
    };
    const { data } = await FestivalAPI.create({ payload });
    dispatch('a_getFestivalsList');
  },
  async a_updateFestival({ dispatch }, { id, name, description, genres, artists }) {
    const payload = {
      name,
      description,
      genres,
      artists
    };
    await FestivalAPI.update({ payload, id });
    dispatch('a_getFestivalsList');
  },
  async a_deleteFestivals({ commit, dispatch }, { ids }) {
    const payload = { ids };
    await FestivalAPI.deleteList({ payload });
    dispatch('a_getFestivalsList');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
