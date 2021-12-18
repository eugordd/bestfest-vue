import GenreAPI from '@api/admin/GenreAPI';

const state = {
  genresList: [],
  genresCount: 0,
  genresListNotDetailed: []
};

const getters = {

};

const mutations = {
  m_setGenres(state, { genres, count }) {
    state.genresList = genres;
    state.genresCount = count;
  },
  m_setGenresNotDetailed(state, genres) {
    state.genresListNotDetailed = genres;
  }
};

const actions = {
  async a_getGenre({}, { id }) {
    const { data } = await GenreAPI.get({ id });
    return data;
  },
  async a_getGenresList({ commit }, rawParams) {
    const params = {
      page: rawParams?.page || 1,
      limit: rawParams?.limit || 20,
      search: rawParams?.search
    };
    const { data } = await GenreAPI.getList(params);
    const { genres, pagination } = data;

    commit('m_setGenres', { genres, count: pagination.total });
  },
  async a_getGenresListNotDetailed({ commit }) {
    const { data } = await GenreAPI.getListNotDetailed();
    const { genres } = data;
    commit('m_setGenresNotDetailed', genres);
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
