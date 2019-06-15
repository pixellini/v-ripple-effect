import Vue from 'vue'
import App from './App.vue'
import ripple from './ripple';

Vue.use(ripple);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
