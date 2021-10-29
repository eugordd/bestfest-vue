import ArtistAPI from '@api/admin/ArtistAPI';
import FestivalAPI from '@api/admin/FestivalAPI';
import GenreAPI from '@api/admin/GenreAPI';

import axios from 'axios';

const state = {
  artists: [],
  festivals: [],
  genres: []
};

const getters = {

};

const mutations = {
  m_setArtists(state, artists) {
    state.artists = artists;
  },
  m_setFestivals(state, festivals) {
    state.festivals = festivals;
  },
  m_setGenres(state, genres) {
    state.genres = genres;
  }
};

const actions = {
  // Artists -------------------------------------------------------------------------------
  async a_getArtists({ commit }) {
    const { data } = await ArtistAPI.getList();
    commit('m_setArtists', data.artists);
  },
  async a_createArtist({ dispatch }, { name, genres }) {
    const payload = { name, genres };
    await ArtistAPI.create({ payload });
    dispatch('a_getArtists');
  },
  async a_updateArtist({ dispatch }, { name, genres, id }) {
    const payload = { name, genres };
    await ArtistAPI.update({ payload, id });
    dispatch('a_getArtists');
  },
  async a_deleteArtist({ dispatch }, { id }) {
    await ArtistAPI.delete({ id });
    dispatch('a_getArtists');
  },
  // Festivals -------------------------------------------------------------------------------
  async a_getFestivals({ commit }) {
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
    dispatch('a_getFestivals');
  },
  async a_updateFestival({ dispatch }, { id, name, description, genres, artists }) {
    const payload = {
      name,
      description,
      genres,
      artists
    };
    await FestivalAPI.update({ payload, id });
    dispatch('a_getFestivals');
  },
  async a_deleteFestival({ dispatch }, { id }) {
    await FestivalAPI.delete({ id });
    dispatch('a_getFestivals');
  },
  // Genres -------------------------------------------------------------------------------
  async a_getGenres({ commit }) {
    const { data } = await GenreAPI.getList();
    commit('m_setGenres', data.genres);
  },
  async a_createGenre({ dispatch }, { name, symlinks }) {
    const payload = { name, symlinks };
    try {
      const data = await GenreAPI.create({ payload });
      dispatch('a_getGenres');
    } catch (e) {
      throw e;
    }
  },
  async a_updateGenre({ commit, dispatch }, { name, symlinks, id }) {
    const payload = { name, symlinks };
    await GenreAPI.update({ payload, id });
    dispatch('a_getGenres');
  },
  async a_deleteGenres({ commit, dispatch }, { ids }) {
    const payload = { ids };
    await GenreAPI.deleteList({ payload });
    dispatch('a_getGenres');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
