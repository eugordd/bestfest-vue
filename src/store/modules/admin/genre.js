import GenreAPI from '@api/admin/GenreAPI';

const state = {
  genres: []
};

const getters = {

};

const mutations = {
  m_setGenres(state, genres) {
    state.genres = genres;
  }
};

const actions = {
  async a_getGenre({}, { id }) {
    const { data } = await GenreAPI.get({ id });
    return data;
  },
  async a_getGenresList({ commit }) {
    const { data } = await GenreAPI.getList();
    commit('m_setGenres', data.genres);
  },
  async a_createGenre({ dispatch }, { name, symlinks }) {
    const payload = { name, symlinks };
    try {
      const data = await GenreAPI.create({ payload });
      dispatch('a_getGenresList');
    } catch (e) {
      throw e;
    }
  },
  async a_updateGenre({ commit, dispatch }, { name, symlinks, id }) {
    const payload = { name, symlinks };
    await GenreAPI.update({ payload, id });
    dispatch('a_getGenresList');
  },
  async a_deleteGenres({ commit, dispatch }, { ids }) {
    const payload = { ids };
    await GenreAPI.deleteList({ payload });
    dispatch('a_getGenresList');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
