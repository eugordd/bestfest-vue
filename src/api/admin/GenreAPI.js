import API from '@api/admin';

export default {
  getList() {
    return API.get('genres');
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
    return API.post('genre/delete-list', payload);
  },
};
