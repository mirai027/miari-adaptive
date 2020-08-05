import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

<<<<<<< HEAD
import {
  Rate
} from 'vant';
import 'vant/lib/rate/style';

Vue.use(Rate);

new Vue({
  render: h => h(App),
}).$mount('#app')
=======
import { Rate, SubmitBar, Checkbox } from 'vant'
import 'vant/lib/rate/style'
import 'vant/lib/submit-bar/style'
import 'vant/lib/checkbox/style'

Vue.use(Rate)
Vue.use(SubmitBar)
Vue.use(Checkbox)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
>>>>>>> f275f9e00e9c99edefd32b5b57acac9c9f17ccc3
