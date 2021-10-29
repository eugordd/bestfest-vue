import API from '@api/admin';

export default {
  login({ payload }) {
    return API.post('admin/login', payload);
  },
};
