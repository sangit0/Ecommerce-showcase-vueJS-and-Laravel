import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product';
import bag from './modules/shopbag';
import * as actions from './actions/action';

Vue.use(Vuex)
const state = {
  drawer: null,
  shopping_cart_btn:null,
}

export default new Vuex.Store({
  state,
  actions,
  modules: {
      products,
      bag
  }
})
