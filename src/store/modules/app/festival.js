import FestivalAPI from '@api/app/FestivalAPI';

const state = {
  festivalsRatedList: []
};

const getters = {

};

const mutations = {
  m_setFestivals(state, festivals) {
    state.festivalsRatedList = festivals;
  }
};

const actions = {
  async a_findFestivals({ commit }, { continents, dateStart, dateEnd, artists }) {
    const payload = {
      continents,
      dateStart,
      dateEnd,
      artists
    };
    const { data } = await FestivalAPI.findFestivals({ payload });
    const { festivals } = data;
    commit('m_setFestivals', festivals);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
