import API from '@api/admin';

export default {
  login({ payload }) {
    return API.post('auth/login', payload);
  }
};
