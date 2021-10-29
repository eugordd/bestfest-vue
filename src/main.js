import Vue from 'vue';

import router from '@router';
import store from '@store';

import '@global/global';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
