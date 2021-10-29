const state = {
  modals: {
    genreCRUD: false
  }
};

const getters = {
  isModalOpened: state => modal => {
    return state.modals[modal];
  },
  isAllModalsClosed: state => {
    return Object.values(state.modals).every(value => !value);
  }
};

const mutations = {
  $m_openModal(state, modal) {
    state.modals[modal] = true;
  },
  $m_closeModal(state, modal) {
    state.modals[modal] = false;
  }
};

const actions = {
  a_openModal({ commit }, modal) {
    commit('$m_openModal', modal);
    document.body.classList.add('modal-opened');
  },
  a_closeModal({ getters, commit }, modal) {
    commit('$m_closeModal', modal);
    if (getters.isAllModalsClosed) {
      document.body.classList.remove('modal-opened');
    }
  },
  a_toggleModal({ getters, dispatch }, modal) {
    getters.isModalOpened(modal) ? dispatch('closeModal', modal) : dispatch('openModal', modal);
  },
  a_closeAllModals({ state, dispatch }) {
    Object.keys(state.modals).forEach(modal => {
      dispatch('closeModal', modal);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
