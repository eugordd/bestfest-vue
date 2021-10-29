import store from '@store';

export default async error => {
  if (error.response.status === 401) await store.dispatch('adminAuth/a_logout');
  return Promise.reject(error);
};
