import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCalculator, faHeadset, faSearch, faChevronRight, faEye, faPhone, faEnvelope, faIdCardAlt,faCamera, faCommentAlt, faCircle, faBell, faMicrophone, faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
window.$ = window.jQuery = require('jquery')

library.add(
  faHome,
  faCalculator,
  faHeadset,
  faSearch,
  faChevronRight,
  faEye,
  faPhone,
  faEnvelope,
  faIdCardAlt,
  faCamera,
  faCommentAlt,
  faCircle,
  faBell,
  faMicrophone,
  faMicrophoneAltSlash
)

// Fiz mudanças

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
