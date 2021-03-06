// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from '@/router/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import ClassGenerator from '@/components/ClassGenerator'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(BootstrapVue)

sync(store, router)

var responseToken = window.localStorage.getItem('userToken')
if (responseToken != null) {
  console.log('Local Token: ' + responseToken)
  store.dispatch('updateUser', JSON.parse(responseToken))
  store.dispatch('setClasses')
  // store.dispatch('setToken', responseToken)
  // store.dispatch('setRole', 'student')
  // store.dispatch('setUser', JSON.parse(responseToken))
}

Vue.component('classGenerator', ClassGenerator) // component to generate classes

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
