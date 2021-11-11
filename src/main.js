import Vue from 'vue'
import VueRouter from 'vue-router'
import icons from "v-svg-icons";
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import {routes} from "./routes"
//Vue.use(i18n);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:'history'
});
Vue.config.productionTip = false
Vue.component("icon", icons);
new Vue({
  router,
  
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')





 
