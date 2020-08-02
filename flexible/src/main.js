import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'amfe-flexible/index.js'

import {
  Rate
} from 'vant';
import 'vant/lib/rate/style';

Vue.use(Rate);

new Vue({
  render: h => h(App),
}).$mount('#app')