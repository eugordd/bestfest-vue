import store from '@store';

export default async config => {
  config.headers.Authorization = `Authorization ${store.state.adminAuth.token}`;
  return config;
};
