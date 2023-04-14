import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from './store'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import {reqJson} from "@/api";
reqJson();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')