import ArtistAPI from '@api/admin/ArtistAPI';

const state = {
  artistsList: [],
  artistsCount: 0,
  artistsListNotDetailed: []
};

const getters = {

};

const mutations = {
  m_setArtists(state, { artists, count }) {
    state.artistsList = artists;
    state.artistsCount = count;
  },
  m_setArtistsNotDetailed(state, artists) {
    state.artistsListNotDetailed = artists;
  }
};

const actions = {
  async a_getArtist({ commit }, { id }) {
    const { data } = await ArtistAPI.get({ id });
    return data;
  },
  async a_getArtistsList({ commit }, rawParams) {
    const params = {
      page: rawParams?.page || 1,
      limit: rawParams?.limit || 20,
      search: rawParams?.search
    };
    const { data } = await ArtistAPI.getList({ params });
    const { artists, pagination } = data;

    commit('m_setArtists', { artists, count: pagination?.total });
  },
  async a_getArtistsListNotDetailed({ commit }) {
    const { data } = await ArtistAPI.getListNotDetailed();
    const { artists } = data;
    commit('m_setArtistsNotDetailed', artists);
  },
  async a_createArtist({ dispatch }, { name, description, country, genres }) {
    const payload = { name, description, country, genres };
    await ArtistAPI.create({ payload });
    dispatch('a_getArtistsList');
  },
  async a_updateArtist({ dispatch }, { name, description, country, genres, id }) {
    const payload = { name, description, country, genres };
    await ArtistAPI.update({ payload, id });
    dispatch('a_getArtistsList');
  },
  async a_deleteArtists({ commit, dispatch }, { ids }) {
    const payload = { ids };
    await ArtistAPI.deleteList({ payload });
    dispatch('a_getArtistsList');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
