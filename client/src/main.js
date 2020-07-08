import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import { BootstrapVue } from "bootstrap-vue";

//Material Vue Css files
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
//Material Theme Css files
import "vue-material/dist/theme/default-dark.css";
//Bootstrap Vue Css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
