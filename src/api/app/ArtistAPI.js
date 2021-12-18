import API from '@api/app';

export default {
  getList({ params }) {
    return API.get('artists', { params });
  },
  get({ id }) {
    return API.get(`artists/${id}`);
  },
};
