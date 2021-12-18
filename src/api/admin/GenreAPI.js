import API from '@api/admin';

export default {
  getList(params) {
    return API.get('genres', { params });
  },
  getListNotDetailed() {
    return API.get('genres/not-detailed');
  },
  get({ id }) {
    return API.get(`genres/${id}`);
  },
  create({ payload }) {
    return API.post('genres', payload);
  },
  update({ payload, id }) {
    return API.put(`genres/${id}`, payload);
  },
  deleteList({ payload }) {
    return API.post('genres/delete-list', payload);
  },
};
