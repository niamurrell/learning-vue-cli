import Vue from 'vue'
import App from './App.vue'
import Composers from './components/Composers'

Vue.config.productionTip = false

Vue.component('composers', Composers);

new Vue({
  render: h => h(App),
}).$mount('#app')
