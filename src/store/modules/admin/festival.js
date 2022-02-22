import FestivalAPI from '@api/admin/FestivalAPI';

const state = {
  festivalsList: [],
  festivalsCount: 0
};

const getters = {

};

const mutations = {
  m_setFestivals(state, { festivals, count }) {
    state.festivalsList = festivals;
    state.festivalsCount = count;
  }
};

const actions = {
  async a_getFestival({ commit }, { id }) {
    const { data } = await FestivalAPI.get({ id });
    return data;
  },
  async a_getFestivalsList({ commit }, rawParams) {
    const params = {
      page: rawParams?.page || 1,
      limit: rawParams?.limit || 20,
      search: rawParams?.search
    };

    const { data } = await FestivalAPI.getList({ params });
    const { festivals, pagination } = data;
    commit('m_setFestivals', { festivals, count: pagination?.total,  });
  },
  async a_createFestival({ dispatch }, {
    name,
    shortName,
    description,
    country,
    place,
    dateStart,
    dateEnd,
    imageUrl,
    website,
    genres,
    artists
  }) {
    const payload = {
      name,
      shortName,
      description,
      country,
      place,
      dateStart,
      dateEnd,
      imageUrl,
      website,
      genres,
      artists
    };
    const { data } = await FestivalAPI.create({ payload });
    dispatch('a_getFestivalsList');
  },
  async a_updateFestival({ dispatch }, {
    id,
    name,
    shortName,
    description,
    country,
    place,
    dateStart,
    dateEnd,
    imageUrl,
    website,
    genres,
    artists
  }) {
    const payload = {
      name,
      shortName,
      description,
      country,
      place,
      dateStart,
      dateEnd,
      imageUrl,
      website,
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
