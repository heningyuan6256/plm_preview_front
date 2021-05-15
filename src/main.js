import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import pv from "pv-plm";
import "pv-plm/dist/pv.css";
import axios from "axios";
Vue.config.productionTip = false;
Vue.use(pv);
Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
