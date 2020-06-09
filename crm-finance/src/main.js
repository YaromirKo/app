import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebaseConfig from './config.api.firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

export default {
  apiKey: 'AIzaSyCVrbYXNwDjM535tYPhJtmvYYksUMJldAA',
  authDomain: 'crm-finance-vue.firebaseapp.com',
  databaseURL: 'https://crm-finance-vue.firebaseio.com',
  projectId: 'crm-finance-vue',
  storageBucket: 'crm-finance-vue.appspot.com',
  messagingSenderId: '107007426472',
  appId: '1:107007426472:web:4220ce6e063fb8facf279d',
  measurementId: 'G-Y7W9NCD0VL'
}

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

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
