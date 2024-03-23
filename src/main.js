import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';// Import ang router object mula sa index.js

Vue.config.productionTip = false;

new Vue({
  router, // Ilagay ang router object sa Vue instance
  render: h => h(App),
}).$mount('#app');
