import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.config.productionTip = false
Vue.use(VueMoment, {
    moment,
})
moment.tz.setDefault("UTC")

new Vue({
  router,
  moment,
  render: h => h(App)
}).$mount('#app')
