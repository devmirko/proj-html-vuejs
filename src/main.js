import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// /* eslint-disable */
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCart as fasCarts } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


// library.add(fasCarts);

// Vue.component("fas", FontAwesomeIcon);
// /* eslint-enable */
new Vue({
  render: h => h(App),
}).$mount('#app')


