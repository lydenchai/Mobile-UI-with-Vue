import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./assets/main.css";
import 'vant/lib/index.css';
import { Card, Button, Search, Rate } from 'vant';

Vue.config.productionTip = false;
Vue.use(Rate);
Vue.use(Card);
Vue.use(Button);
Vue.use(Search);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");


