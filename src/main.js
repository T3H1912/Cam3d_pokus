import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'
import vb from 'vue-babylonjs'
import VueStatic from 'vue-static'


// import * as BABYLON from 'babylonjs'
//Vue.prototype.BABYLON = BABYLON;

// import * as earcut from 'earcut'
// Vue.prototype.MyEarcut = earcut;
Vue.use(VueStatic);
Vue.use(vb);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

