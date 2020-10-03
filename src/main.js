import Vue from 'vue'
import App from './App.vue'
import naver from 'vue-naver-maps';
import axios from 'axios'

Vue.prototype.$http=axios


Vue.config.productionTip = false

Vue.use(naver,{
  clientID: 'tr6k2qy8lh',
  useGovAPI: false,
  subModules:''
});


new Vue({
  render: h => h(App),
}).$mount('#app')

