import firebaseConfig from './config.api.firebase'

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import dateFilter from '@/filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from './components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
