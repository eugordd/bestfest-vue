import API from '@api/admin';

export default {
  getList() {
    return API.get('artists');
  },
  get({ id }) {
    return API.get(`artists/${id}`);
  },
  create({ payload }) {
    return API.post('artists', payload);
  },
  update({ payload, id }) {
    return API.put(`artists/${id}`, payload);
  },
  deleteList({ payload }) {
    return API.post('artist/delete-list', payload);
  },
};
