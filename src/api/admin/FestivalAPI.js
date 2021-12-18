import API from '@api/admin';

export default {
  getList({ params }) {
    return API.get('festivals', { params });
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
  deleteList({ payload }) {
    return API.post('festivals/delete-list', payload);
  },
};
