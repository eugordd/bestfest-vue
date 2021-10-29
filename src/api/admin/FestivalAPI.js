import API from '@api/admin';

export default {
  getList() {
    return API.get('festivals');
  },
  get({ id }) {
    return API.get(`festivals/${id}`);
  },
  create({ payload }) {
    return API.post('festivals', payload);
  },
  update({ payload, id }) {
    return API.put(`festivals/${id}`, payload);
  },
  delete({ id }) {
    return API.delete(`festivals/${id}`);
  },
};
