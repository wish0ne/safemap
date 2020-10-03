import Vue from 'vue'
import App from './App.vue'
import naver from 'vue-naver-maps';


Vue.config.productionTip = false

Vue.use(naver,{
  clientID: 'tr6k2qy8lh',
  useGovAPI: false,
  subModules:''
});


new Vue({
  render: h => h(App),
}).$mount('#app')

