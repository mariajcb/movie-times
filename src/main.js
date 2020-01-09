import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import { addClass, removeClass } from './util/helpers'
export const bus = new Vue()

Vue.config.productionTip = false
Vue.use(VueMoment, {
    moment,
})

const mouseOverHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName('SPAN')[0]
  addClass(span, 'tooltip-show')
}
const mouseOutHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName('SPAN')[0]
  removeClass(span, 'tooltip-show')
}
Vue.directive('tooltip', {
  bind: function(el) {
    let span = document.createElement('SPAN')
    const text = document.createTextNode('Seats available: 200')
    span.appendChild(text)
    addClass(span, 'tooltip')
    el.appendChild(span)
    let div = el.getElementsByTagName('DIV')[0]
    div.addEventListener('mouseover', mouseOverHandler)
    div.addEventListener('mouseout', mouseOutHandler)
    div.addEventListener('touchstart', mouseOverHandler)
    div.addEventListener('touchend', mouseOutHandler)
  },
  unbind: function(el) {
    let div = el.getElementsByTagName('DIV')[0]
    div.removeEventListener('mouseover', mouseOverHandler)
    div.removeEventListener('mouseout', mouseOutHandler)
    div.removeEventListener('touchstart', mouseOverHandler)
    div.remove('touchend', mouseOutHandler)
  }
})
moment.tz.setDefault("UTC")

new Vue({
  router,
  moment,
  render: h => h(App)
}).$mount('#app')
