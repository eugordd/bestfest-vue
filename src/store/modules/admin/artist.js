import ArtistAPI from '@api/admin/ArtistAPI';

const state = {
  artistsList: [],
  artistsCount: 0
};

const getters = {

};

const mutations = {
  m_setArtists(state, { artists, count }) {
    state.artistsList = artists;
    state.artistsCount = count;
  },
};

const actions = {
  async a_getArtist({ commit }, { id }) {
    const { data } = await ArtistAPI.get({ id });
    return data;
  },
  async a_getArtistsList({ commit }, { params }) {
    const { data } = await ArtistAPI.getList({ params });
    const { artists, pagination } = data;

    commit('m_setArtists', { artists, count: pagination?.total });
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
