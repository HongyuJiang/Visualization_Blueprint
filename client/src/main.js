// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

import Entrance from './components/Entrance'
import BlueEditor from './components/BlueEditor'

Vue.use(VueRouter)
Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'rgb(200, 200, 200)',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(200, 200, 200)',
    }
  }
})

const routes = [
	{ path: '/', redirect: '/blue' },
  { path: '/home', name: 'home', component: Entrance},
  { path: '/blue', name: 'blue', component: BlueEditor}
]

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
