import store from '@store';

export default async error => {
  if (error.response.status === 401) await store.dispatch('admin/auth/a_logout');
  return Promise.reject(error);
};
