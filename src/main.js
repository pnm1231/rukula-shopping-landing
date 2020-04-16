import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: 'UA-163780626-1'
  }
}, router);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
