import Vue from 'vue'
import dash from './components/backEndComponents/layoutdash.vue'
import home from './components/backEndComponents/Admin/dashboard.vue'
import productcategory from './components/product-category/product-categories.vue'
import store from './components/ecommerce-front/store.vue'

import Login from './components/authentication/Login.vue'

const routes = [

    {
    name: 'dashboard',
    path: '/admin',
    component: dash,
    meta:{
        users:true
    },
    children: [
        {
          path: 'home',
          component: home
      },
      {
        path: 'product-category',
        component: productcategory
    }]
  },{
  name: 'Login',
  path: '/login',
  component: Login,
  meta:{
      visitors:true
  }
},
{
  name: 'store',
  path: '/',
  component: store,
  meta:{
      visitors:true
 }
}
];

export default routes;
