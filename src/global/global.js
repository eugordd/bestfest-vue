import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import UiButton from '@components/ui/UiButton';
import UiContainer from '@components/ui/UiContainer';
import UiInput from '@components/ui/UiInput';
import UiModal from '@components/ui/UiModal';
import UiPagination from '@components/ui/UiPagination';

Vue.use(ElementUI, { locale });

Vue.component('ui-button', UiButton);
Vue.component('ui-container', UiContainer);
Vue.component('ui-input', UiInput);
Vue.component('ui-modal', UiModal);
Vue.component('ui-pagination', UiPagination);
