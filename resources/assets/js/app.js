//window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue';
import routes from './routes.js'
import Auth from './packages/auth.js'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import store from './store'; // path to your Vuex store

Vue.use(store)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Auth)


window.$ = jQuery
window.axios = require('axios')

//base URL
Vue.http.options.root="http://localhost:8000"

  window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'

};


const router = new VueRouter({ mode: 'history', routes: routes});

router.beforeEach((to, from, next) => {

    //Authorization
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

  if (to.matched.some(record => record.meta.visitors)) {
    if (Vue.auth.isLoggedin()) {
      next();
    } else {
      next();
    }
} else if (to.matched.some(record => record.meta.users)) {
  if (!Vue.auth.isLoggedin()) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
}
   else {
    next();
  }
})


new Vue({
    router,
    components: {App},
    template: '<App/>',
    store,
}).$mount('#app');
