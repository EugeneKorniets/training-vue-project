import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const config = {
      apiKey: 'AIzaSyBltx4eJ9eezQum2IwQ3oElau7gSSWyjQA',
      authDomain: 'student-app-vue.firebaseapp.com',
      databaseURL: 'https://student-app-vue.firebaseio.com',
      projectId: 'student-app-vue',
      storageBucket: 'student-app-vue.appspot.com',
      messagingSenderId: '302176362791'
    }
    fb.initializeApp(config)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
