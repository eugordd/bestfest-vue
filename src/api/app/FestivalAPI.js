import API from '@api/app';

export default {
  findFestivals({ payload }) {
    return API.post('find-festivals', payload);
  },
  get({ id }) {
    return API.get(`festivals/${id}`);
  },
};
