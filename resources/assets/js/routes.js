import Vue from 'vue'
import dash from './components/backEndComponents/layoutdash.vue'
import home from './components/backEndComponents/Admin/dashboard.vue'
import product from './components/backEndComponents/Admin/product/showProducts.vue'
import productcategory from './components/product-category/product-categories.vue'
import store from './components/ecommerce-front/store.vue'
import checkout from './components/ecommerce-front/checkout.vue'

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
        path: '/home',
        component: home
      },
      {
        path: '/product',
        component: product
      },
      {
        path: 'product-category',
        component: productcategory
<<<<<<< HEAD
      }]
    },
    {
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
=======
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
},
{
  name: 'checkout',
  path: '/checkout',
  component: checkout,
  meta:{
      visitors:true
 }
}
];
>>>>>>> 4a3bc6c830e94b9c9c9e819a66ea56d68cd761aa

  export default routes;
