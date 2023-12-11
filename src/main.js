import Vue from "vue";
import App from "./App.vue";
import "../public/index.css";

Vue.config.productionTip = false;

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faWind,
  faCloudRain,
  faWater,
  faSun,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

library.add(faWind, faCloudRain, faWater, faSun, faUser, faGear);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
