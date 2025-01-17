import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VModal from 'vue-js-modal';
import { router } from './router';

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
