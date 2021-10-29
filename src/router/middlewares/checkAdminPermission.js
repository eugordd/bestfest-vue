import Cookies from 'js-cookie';

export default (to, from, next) => {
  const isAdmin = Cookies.get('admin-token');
  if (!isAdmin && to.name !== 'admin-login') {
    return next({ name: 'admin-login' });
  }
  if (isAdmin && to.name === 'admin-login') {
    return next({ name: 'admin-artists' });
  }
  next();
};
