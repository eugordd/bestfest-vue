import ArtistAPI from '@api/admin/ArtistAPI';

const state = {
  artistsList: []
};

const getters = {

};

const mutations = {
  m_setArtists(state, artists) {
    state.artistsList = artists;
  }
};

const actions = {
  async a_getArtist({ commit }, { id }) {
    const { data } = await ArtistAPI.get({ id });
    return data;
  },
  async a_getArtistsList({ commit }) {
    const { data } = await ArtistAPI.getList();
    commit('m_setArtists', data.artists);
  },
  async a_createArtist({ dispatch }, { name, genres }) {
    const payload = { name, genres };
    await ArtistAPI.create({ payload });
    dispatch('a_getArtistsList');
  },
  async a_updateArtist({ dispatch }, { name, genres, id }) {
    const payload = { name, genres };
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
